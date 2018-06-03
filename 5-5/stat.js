var fs = require('fs');

fs.stat('./fuga.txt', function(err, result) {
  if(err) console.log(err);
  console.log(result);
});
