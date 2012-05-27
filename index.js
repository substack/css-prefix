var cssp = require('cssp');
var traverse = require('traverse');

module.exports = function (prefix, src) {
    var tree = cssp.parse(src);
    traverse(tree).forEach(function (node) {
        if (!Array.isArray(node)) return;
        
        if (node[0] === 'clazz' && node[1][0] === 'ident') {
            node[1][1] = prefix + node[1][1];
        }
        else if (node[0] === 'shash') {
            node[1] = prefix + node[1];
        }
    });
    
    return cssp.translate(tree);
};
