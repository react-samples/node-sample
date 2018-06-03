var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  try {
    var stream = fs.createReadStream('./test.png');
    stream.pipe(res);
  }catch(e){
    throw e;
  }
})

server.listen('8080');
