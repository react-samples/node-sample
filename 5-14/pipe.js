var fs = require('fs');
var http = require('http');
var zlib = require('zlib');

http.createServer(function(req, res) {
  try {
    res.setHeader('Content-Encoding', 'gzip');
    var stream = fs.createReadStream('./test.png');
    stream.pipe(zlib.createGzip()).pipe(res);
  }catch(e){
    throw e;
  }
}).listen('8080');
