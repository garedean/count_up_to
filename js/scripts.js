var countTo = function(n, x) {
  var numbers = [];
  for(var  y = x; y <= n; y+=x) {
    numbers.push(y);
  }
  return numbers;

};
