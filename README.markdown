css-prefix
==========

Insert a prefix into css documents.

[![build status](https://secure.travis-ci.org/substack/css-prefix.png)](http://travis-ci.org/substack/css-prefix)

example
=======

``` js
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/beep.css', 'utf8');

var insertPrefix = require('css-prefix');
var dst = insertPrefix('RAWR-', src);
console.log(dst);
```

beep.css:

``` css
#beep div.boop.killer-robots {
    color: red;
}

#beep .friendly-robots {
    color: green;
}
```

output:

``` css
#RAWR-beep div.RAWR-boop.RAWR-killer-robots {
    color: red;
}

#RAWR-beep .RAWR-friendly-robots {
    color: green;
}
```

methods
=======

``` js
var insertPrefix = require('css-prefix')
```

insertPrefix(opts, src)
-----------------------

Insert the string `opts.prefix` before every class and id in the css source
string `src`, returning the transformed source.

If `opts.elementClass` is given, add this class to all element identifiers. This
is useful so that your `h1 { color: green; }` declarations don't leak into the
environment.

If `opts.parentClass` is given, add an ancestor class to every rule.

If `opts` is a string, treat `opts` as `opts.prefix`.

install
=======

With [npm](http://npmjs.org) do:

```
npm install css-prefix
```

license
=======

MIT
