// 014_another.jsのプログラムの方が早いが、
// 今回のような問題だと、配列の引数の上限を超えるため、
// 正しく計算できないことがある。その時はこちらの方がいい
function collatz_length(num) {
  let length = 1;
  let calc = num;
  while (calc !== 1) {
    length++;
    if (calc % 2 === 0) {
      calc /= 2;
    } else {
      calc = calc * 3 + 1;
    }
  }
  return length;
}

//初項が1,000,000未満の数の時、どの数から始めれば最長の数列を生成できるか

let maximum = 0;
let num = 0;
for (let i = 999999; i > 1; i-- ){
  let tmp = collatz_length(i);
  if (tmp > maximum){
    maximum = tmp;
    num = i;
  }
}

console.log(num); // 解答
console.log(maximum);
