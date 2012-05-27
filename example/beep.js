var fs = require('fs');
var src = fs.readFileSync(__dirname + '/beep.css', 'utf8');

var insertPrefix = require('../');
var dst = insertPrefix('RAWR-', src);
console.log(dst);
