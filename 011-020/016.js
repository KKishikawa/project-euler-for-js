// 各位の数字の和
// そのまま累乗を求めるやり方では、途中で浮動小数に変換されるためうまくいかない
/*
var num = 2;
var pow = 10;
var calc = Math.pow(num,pow);
console.log(calc.toString().split('').reduce((a,b)=>{
  return a + parseInt(b, 10);
},0));
*/

// 配列で巨大な整数をエミュレートする
var bigInt = {
  numArr: [],
  digit: 0,
  init(num) {
    this.digit = num;
    this.numArr = new Array(num);
    this.numArr.fill(0);
    this.numArr[0] = 1;
  },
  prod(num){
    for(var i = 0; i < this.digit; i++){
      this.numArr[i] *= num;
    }
    this.checkAll();
  },
  checkAll(){
    for(var i = 0; i < this.digit; i++){
      this.check1(i);
    }
  },
  check1(i) {
    // i桁目数字が一つだけであるかちぇっくする
    // 一桁上がることだけ考慮する
    if (this.numArr[i - 1] / 10 >= 1) {
      var str = this.numArr[i - 1].toString();
      this.numArr[i] += parseInt(str[0], 10);
      this.numArr[i - 1] = parseInt(str[1], 10);
    }
  }

}


var num = 2;
var pow = 1000;
var digits = ~~(pow * Math.log10(num) + 1);

bigInt.init(digits);

for (var i = 0; i < pow; i++) {
  bigInt.prod(num);
}

console.log(bigInt.numArr.reduce((a,b)=>{
  return a + b;
}));
