var http = require('http');

var request = function() {
  return new Promise(function(resolve, reject) {
    http.get("http://www.stallman.org/", function(res) {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        resolve(body);
      });
    }).on('error', function(e) {
      reject(e);
    })
  });
};

request()
  .then(function(result) {
    console.log(result);
  }).catch(function(e) {
    console.log(e);
  });
