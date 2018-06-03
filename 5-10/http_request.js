var http = require('http');

http.get("http://www.stallman.org/", function(res) {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        body += chunk;
    });
    res.on('end', function() {
        console.log(body);
    });
});
