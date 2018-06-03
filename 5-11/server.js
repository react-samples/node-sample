var https = require('https');

const options = {
  key: fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server-cert.key')
};

var server = https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('hello world\n');
})
server.listen(8000);
