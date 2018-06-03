var fs = require('fs');

fs.readFile('./fuga.txt', function(err, data) {
  if(err){
    return console.log(err);
  }else{
    return console.log(data.toString('utf8'));
  }
});
