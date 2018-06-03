var fs = require('fs')

fs.unlink('./foo.txt', function(err) {
  if(err) console.log(err);
});
