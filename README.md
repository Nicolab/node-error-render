# error-render

[![Actual version published on NPM](https://badge.fury.io/js/error-render.png)](https://www.npmjs.org/package/error-render)
[![Dependencies](https://david-dm.org/Nicolab/error-render.png)](https://david-dm.org/Nicolab/error-render)


## Install

```shell
npm install error-render --save
```


## Usage

```js
var er    = require('error-render');
var error = new Error('Whoops !');

// pretty error with the details (metadata)
console.error(er.details(error));

// shortcut of console.error(er.details(error));
er.log(error)
```

Pretty JSON
```js
er.prettyJson(error);
```

Pretty error without the metadata of the error instance
```js
var pe = new er.PrettyError();

console.error(pe.render(error));
```
 > Provided by [pretty-error](https://github.com/AriaMinaei/pretty-error)


## Unit tests

`error-render` is tested with [Unit.js](https://github.com/unitjs/unit.js)

Run the tests
```shell
cd node_modules/error-render

npm test
```

## LICENSE

[MIT license](https://github.com/Nicolab/node-error-render/blob/master/LICENSE)


## Author

| [![Nicolas Tallefourtane - Nicolab.net](http://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](http://nicolab.net) |
|---|
| [Nicolas Talle](http://nicolab.net) |
| [![Support via Gittip](http://img.shields.io/gittip/Nicolab.svg)](https://www.gittip.com/Nicolab/) |
| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) 
