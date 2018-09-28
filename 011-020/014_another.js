// 14別解
// 計算結果の一部をメモリーに格納して計算回数を減らす。
// 初項から1になるまで計算し続けて求めるよりも4~5倍程度早い。
// ただし初期化に使用する数が大きいと、引数の上限を超えるので、
// 環境によっては正しく計算できない可能性がある。
let collatz = {
  coll: [],
  maximum:[2,2], // [0]:initial number, [1]:sequence length
  init(num) {
    this.coll = [0, 1, 2];
    for (let i = 3; i <= num; i++) {
        let tmp = this.collatz_length(i);
        this.coll[i] = tmp;
        if (tmp > this.maximum[1]){
          this.maximum = [i, tmp];
        }
    }
  },
  collatz_length(num) {
    let length = 0;
    let calc = num;
    while (calc > this.coll.length-1) {
      length++;
      if (calc % 2 === 0) {
        calc /= 2;
      } else {
        calc = calc * 3 + 1;
      }
    }
    return length + this.coll[calc];
  }
};


//初項が1,000,000未満の数の時、どの数から始めれば最長の数列を生成できるか
collatz.init(1000000);

console.log(collatz.maximum[0]); // 解答
console.log(collatz.maximum[1]);
