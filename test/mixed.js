var test = require('tap').test;
var insertPrefix = require('../');
var fs = require('fs');

var src = fs.readFileSync(__dirname + '/mixed.css', 'utf8');
var dst = fs.readFileSync(__dirname + '/mixed_dst.css', 'utf8');

test('tossed salad of css', function (t) {
    t.equal(dst, insertPrefix('pre-', src));
    t.end();
});
