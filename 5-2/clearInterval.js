var interval = setInterval(function() {
  console.log('Hoge');
}, 2000);

setTimeout(function() {
  clearInterval(interval);
}, 7000);
