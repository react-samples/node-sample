var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200 ,{ 'Content-Type': 'image/png'});
  fs.readFile('./test.png', function(err, img){
    if(err){
      res.end('file not found.\n');
    }else{
      res.write(img);
    }
  });
});

server.listen('8080');
