# transformer.base32-to-buffer

[Transformer](http://github.com/jbenet/transformer) conversion: base32 to buffer

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Javascript

```js
var transformer = require('dat-transformer');
var tBase32ToBuffer = transformer('base32', 'buffer');
tBase32ToBuffer('c9jpaw10c9qpyw0'); // new Buffer('beep boop', 'ascii')
```
