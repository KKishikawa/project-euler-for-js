//約数の数を数える
var divisor_count = function (num) {
  if (num === 1) {
    return 1;
  }
  if (num < 1) {
    return 0;
  }
  var result = 1;

  var calcNum = num;
  var count = 0;

  while (calcNum % 2 === 0) {
    calcNum /= 2;
    count++;
  }

  count === 0 || (result *= count + 1);

  for (var i = 3; i <= calcNum; i += 2) {
    count = 0;
    while (calcNum % i === 0) {
      calcNum /= i;
      count++;
    }
    count === 0 || (result *= count + 1);
  }

  return result;
};


var count = 500;
var triangle = 1;

for (var i = 2; divisor_count(triangle) <= count; i++) {
  triangle += i;
}

console.log(triangle);
