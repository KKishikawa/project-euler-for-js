//ファイルからデータを読み込む
let fs = require('fs');
let input_raw = fs.readFileSync('./001-020/018.data.txt', 'utf-8');
// 改行コードのCRLF or CR or LFで分割する
let input = input_raw.split(/\r\n|\r|\n/);
let nums = input.map(x => x.split(' ').map(y => parseInt(y, 10)));

for (let row = nums.length - 2; row >= 0; row--) {
  // for..in でループを書くと変数にNumber型でなく、String型が代入されることがあるので注意
  for (let col = 0; col < nums[row].length; col++) {
    nums[row][col] += Math.max(nums[row + 1][col], nums[row + 1][col + 1]);
  }
}

console.log(nums[0][0]);
