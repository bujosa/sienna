var b64string = /* whatever */;
var buf = new Buffer(b64string, 'base64'); // Ta-da

// encoding and decoding base64

'use strict';

let data = 'stackabuse.com';
let buff = new Buffer(data);
let base64data = buff.toString('base64');

console.log('"' + data + '" converted to Base64 is "' + base64data + '"');
