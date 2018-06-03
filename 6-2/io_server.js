var http = require('http');
var fs = require('fs')
var Io = require('socket.io');


var server = http.createServer(function(req, res) {
  var source = fs.createReadStream('index.html');
  res.writeHead(200);
  source.pipe(res);
})

io = Io(server);

let counter = 0;

io.sockets.on('connection', function(socket) {

    io.emit('change', {
        count: counter + 1
    });

    socket.on('join', function() {
      counter++;
      socket.broadcast.emit('change', {
        count: counter
      });
    });

    socket.on('disconnect', function() {
      counter--;
      socket.broadcast.emit('change', {
        count: counter
      });
    });

});

server.listen(3000);
