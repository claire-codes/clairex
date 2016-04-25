## Clairex

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

### But really, wtf is this?

* Fun with ES6 modules
 * a test suite using Ava
 * a test suite using Mocha for the transpiled code
* Fun with method chaining in JavaScript
* A JavaScript/ES6 implementation of Ruby's [Stringex](https://github.com/rsl/stringex) library
 * using `toUrl()` in my own Yeoman generator [generator-clekyll](https://github.com/claireparker/generator-clekyll): this was my first inspiration for the project
* Another repo/project with an egotistical name :princess: (_Claire is the __best__ name_)

### Usage

In order to make use of `this` to enable method chaining, the methods all live within an object called `clairex`. This is what is exported and you have access to. To get access to an individual method, e.g. `toUrl()`, install the module and call it:

```
npm i -s clairex        // -s adds it to your package.json
```

Now require it in a script in one of two ways:

```
var x = require('clairex');

x.clairex.toUrl('Convert this string to a usable URL');
```

Or:

```
var x = require('clairex').clairex;

x.toUrl('Convert this string to a usable URL');
```

### Transpile

```
gulp build
```

### Run the tests

```
npm test        // Ava tests are default
npm run mocha
```

You don't need to `gulp` before running the Ava tests but you do for Mocha ones.

## Code of conduct

[Here](https://github.com/claireparker/clairex/blob/master/CODE_OF_CONDUCT.md). :star2::couple::sunny:

## License

[MIT © Claire Parker](https://github.com/claireparker/clairex/blob/master/LICENSE.md)


[npm-image]: https://badge.fury.io/js/clairex.svg
[npm-url]: https://npmjs.org/package/clairex
[travis-image]: https://travis-ci.org/claireparker/clairex.svg?branch=master
[travis-url]: https://travis-ci.org/claireparker/clairex
[daviddm-image]: https://david-dm.org/claireparker/clairex.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/claireparker/clairex
[coveralls-image]: https://coveralls.io/repos/claireparker/clairex/badge.svg
[coveralls-url]: https://coveralls.io/r/claireparker/clairex
