var test = require('tap').test;
var insertPrefix = require('../');
var fs = require('fs');

var src = {
    mixed : fs.readFileSync(__dirname + '/mixed.css', 'utf8'),
    tags : fs.readFileSync(__dirname + '/tags.css', 'utf8'),
    parent : fs.readFileSync(__dirname + '/parent.css', 'utf8'),
};

var dst = {
    mixed : fs.readFileSync(__dirname + '/mixed_dst.css', 'utf8'),
    tags : fs.readFileSync(__dirname + '/tags_dst.css', 'utf8'),
    parentClass : fs.readFileSync(__dirname + '/parentClass_dst.css', 'utf8'),
    parentId : fs.readFileSync(__dirname + '/parentId_dst.css', 'utf8'),
    parentClassId : fs.readFileSync(__dirname + '/parentClassId_dst.css', 'utf8'),
};

test('mixed', function (t) {
    t.equal(insertPrefix('pre-', src.mixed), dst.mixed);
    t.end();
});

test('tags', function (t) {
    t.equal(insertPrefix({
        prefix : 'zzz-',
        elementClass : 'xxx',
    }, src.tags), dst.tags);
    t.end();
});

test('parentClass', function (t) {
    t.equal(insertPrefix({
        prefix : 'zzz-',
        parentClass : 'WOWSY',
        elementClass : 'xxx',
    }, src.parent), dst.parentClass);
    t.end();
});

test('parentId', function (t) {
    t.equal(insertPrefix({
        prefix : 'zzz-',
        parentId : 'WOWSYID',
        elementClass : 'xxx',
    }, src.parent), dst.parentId);
    t.end();
});

test('parentId & parentClass', function (t) {
    t.equal(insertPrefix({
        prefix : 'zzz-',
        parentClass : 'WOWSYCZZ',
        parentId : 'WOWSYID',
        elementClass : 'xxx',
    }, src.parent), dst.parentClassId);
    t.end();
});
