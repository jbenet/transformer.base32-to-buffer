var Conversion = require('transformer-conversion');
var tBase32 = require('transformer.base32');
var tBuffer = require('transformer.buffer');
// require any other modules you may need here.
var base32 = require('base32');

module.exports = Conversion(tBase32, tBuffer, convert);

// this is a synchronous conversion.
function convert(input) {
  return new Buffer(base32.decode(input), 'ascii')
}
