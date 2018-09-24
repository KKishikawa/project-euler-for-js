// 自身を含まない約数の和を求める
const sum_divisors_not_own = function (num) {
  if (num === 1) {
    return 1;
  }
  let result = 0;
  for (let i = 1; i < num; i++) {
    if (num % i !== 0) {
      continue;
    }
    result += i;
  }
  return result;
}


let amicables = [];

// 友愛数を求める
for (let i = 1; i < 10000; i++) {
  if (amicables.includes(i)) {
    continue;
  }
  num1 = sum_divisors_not_own(i);
  if (num1 === i) {
    continue;
  }
  num2 = sum_divisors_not_own(num1);
  if (num2 === i) {
    amicables.push(num1, num2);
  }
}

console.log(amicables);
console.log(amicables.reduce((a, b) => a + b)); // 答え
