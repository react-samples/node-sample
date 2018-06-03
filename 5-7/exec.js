var child_process = require('child_process');

child_process.exec('ls', function(err, stdout, stderr) {
  if(err) return console.log(err);
  console.log(stdout);
  console.log(stderr);
});
