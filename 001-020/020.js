//通常の整数型では桁あふれを起こすので、BigIntを利用する
//数字の末尾にnを付ける
//BigIntはNode v10の機能
const factrial_n = num => {
  return num === 0n ? 1n : factrial_n(num - 1n) * num;
};

let result = factrial_n(100n);
console.log(result.toString().split('').map(x=>parseInt(x,10)).reduce((a,b)=>a+b));
