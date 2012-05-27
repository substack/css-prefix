css-prefix
==========

Insert a prefix into css documents.

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

insertPrefix(prefix, src)
-------------------------

Insert the string `prefix` before every class and id in the css source string
`src`, returning the transformed source.

install
=======

With [npm](http://npmjs.org) do:

```
npm install css-prefix
```

license
=======

MIT
