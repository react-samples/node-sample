var crypto = require('crypto');

var sha256 = crypto.createHash('sha256');
var hash = sha256.update('Node.js');
var hex = hash.digest('hex');
console.log(hex);
