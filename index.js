var cssp = require('cssp');
var traverse = require('traverse');

module.exports = function (opts, src) {
    if (typeof opts === 'string') {
        opts = { prefix : opts };
    }
    
    var tree = cssp.parse(src);
    traverse(tree).forEach(function (node) {
        if (!Array.isArray(node)) return;
        
        if (node[0] === 'clazz' && node[1][0] === 'ident') {
            if (node[1][1] !== opts.elementClass) {
                node[1][1] = opts.prefix + node[1][1];
            }
        }
        else if (node[0] === 'shash') {
            node[1] = opts.prefix + node[1];
        }
        else if (opts.elementClass && node[0] === 'ident'
        && this.parent && Array.isArray(this.parent.node)
        && this.parent.node[0] === 'simpleselector') {
            var ix = parseInt(this.key, 10) + 1;
            var cz = [ 'clazz', [ 'ident', opts.elementClass ] ];
            this.parent.node.splice(ix, 0, cz);
        }
    });
    
    if (opts.parentClass) {
        traverse(tree).forEach(function (node) {
            if (node === 'simpleselector') {
                this.parent.node.splice(1, 0,
                    [ 'clazz', [ 'ident', opts.parentClass ] ],
                    [ 's', ' ' ]
                );
            }
        });
    }
    
    return cssp.translate(tree);
};
