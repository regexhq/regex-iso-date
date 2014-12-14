# regex-iso-date
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Regular expression for ISO date.

## Installation
```bash
npm install regex-iso-date
```

## Usage

```js
var regex = require('regex-iso-date');

regex().test('2011-10-05T14:48:00.000Z');
// => true

var match = regex().exec('2011-10-05T14:48:00.000Z');
match[0] // => '2011-10-05T14:48:00.000Z'
match[1] // => '2011'
match[2] // => '10'
match[3] // => '05'
match[4] // => '14:48:00'
match[5] // => '14'
match[6] // => '48'
match[7] // => '00'
match[8] // => '000'
```

## Contributors
- [Yoshua Wuyts](https://github.com/yoshuawuyts)
- [Hugh Kennedy](https://github.com/hughsk)
- [Jon Schlinkert](https://github.com/jonschlinkert)

## See Also
- [Date.prototype.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/regex-iso-date.svg?style=flat-square
[npm-url]: https://npmjs.org/package/regex-iso-date
[travis-image]: https://img.shields.io/travis/regexps/regex-iso-date.svg?style=flat-square
[travis-url]: https://travis-ci.org/regexps/regex-iso-date
[coveralls-image]: https://img.shields.io/coveralls/regexps/regex-iso-date.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/regexps/regex-iso-date?branch=master
[downloads-image]: http://img.shields.io/npm/dm/regex-iso-date.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/regex-iso-date
