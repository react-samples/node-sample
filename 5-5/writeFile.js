var fs = require('fs');

fs.writeFile('foo.txt', 'Hoge Fuga', function(err) {
  if(err) throw err;
});
