var transformer = require('dat-transformer');
var tBase32 = transformer('base32');
var tBuffer = transformer('buffer');
// require any other modules you may need here.
var base32 = require('base32');

module.exports = transformer.Conversion(tBase32, tBuffer, convert);

// this is a synchronous conversion.
function convert(input) {
  return new Buffer(base32.decode(input), 'ascii')
}
