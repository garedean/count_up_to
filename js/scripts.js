var countTo = function(n, x) {
  var numbers = [];
  for(var  y = x; y <= n; y+=x) {
    numbers.push(y);
  }
  return numbers;
};

$(function() {
  $("form").submit(function() {
    var max      = parseInt($("#max").val());
    var interval = parseInt($("#interval").val());

    $("#result-wrapper").show();
    $("#result").text(countTo(max, interval));

    return false;
  });
})
