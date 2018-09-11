// numを素因数分解する
var prime_divition = function (num) {
  if (num < 2) {
    return [];
  }
  var calcNum = num;
  var count = 0;
  var primes = {
    nums: [],
    setPrime(num, count) {
      count > 0 && this.nums.push([num, count]);
    }
  };

  while (calcNum % 2 === 0) {
    calcNum /= 2;
    count++;
  }

  primes.setPrime(2, count);

  for (var i = 3; i <= calcNum; i += 2) {
    count = 0;
    while (calcNum % i === 0) {
      calcNum /= i;
      count++;
    }
    primes.setPrime(i, count);
  }
  return primes.nums;
};

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
    console.log(result)
  }

  return result;
};
