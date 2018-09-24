// ファイルを読み込み、namesに代入し、ソートする
let path = require('path');
let fs = require('fs');
let input_raw = fs.readFileSync(path.join(__dirname, './p022_names.txt'), 'utf-8');
let names = input_raw.replace(/\"/g, '').split(',').sort();

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let result = 0;
names.forEach(function (name, index) {
  // 何番目のalphabetなのかを１文字ずつ確認し、その結果をreduceで足し合わせる
  let alp_val = name.split('').reduce(function (sum, char) {
    return sum + alphabet.indexOf(char) + 1;
  }, 0);
  // alphabetical valueにsort順の重みを付ける
  result += alp_val * (index + 1);
});

console.log(result);
