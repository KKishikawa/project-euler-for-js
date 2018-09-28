// grid is N * n
const N = 20;
// d個抽出する
const D = 4;
let max_index = N - D;

// 011.data.txtを読み込む
const path = require('path');
const fs = require('fs');
let input_raw = fs.readFileSync(path.join(__dirname, './011.data.txt'), 'utf-8');
let str_grid = input_raw.trim();

// gridの配列化
let grid_nums = [];
str_grid.split(/\r\n|\r|\n/).forEach((row) => {
  grid_nums.push(
    row.split(" ").map(function (value, index, arr) {
      return parseInt(value, 10)
    })
  );
});

let calc_result = 0;
for (let h = 0; h < N; h++) {
  for (let w = 0; w < N; w++) {
    //横の積
    if (w <= max_index) {
      let tmp_sum = 1
      for (let i = 0; i < D; i++) {
        tmp_sum *= grid_nums[h][w + i];
      }
      // tmp_sumが大きければ答えの候補としてメモリに格納する
      tmp_sum < calc_result || (calc_result = tmp_sum)
    }

    // 縦の積
    // 縦の座標が、自分含めて下からd個抽出できないならループを進める
    if (h > max_index) continue;
    let tmp_sum = 1
    for (let i = 0; i < D; i++) {
      tmp_sum *= grid_nums[h + i][w];
    }
    // tmp_sumが大きければ答えの候補としてメモリに格納する
    tmp_sum < calc_result || (calc_result = tmp_sum)

    // 斜めの積
    // まず左上から右下に足していく
    if (w <= max_index) {
      let tmp_sum = 1
      for (var i = 0; i < D; i++) {
        tmp_sum *= grid_nums[h + i][w + i];
      }
      // tmp_sumが大きければ答えの候補としてメモリに格納する
      tmp_sum < calc_result || (calc_result = tmp_sum)
    }
    // まず右上から左下に足していく
    if (w >= D - 1) {
      let tmp_sum = 1
      for (var i = 0; i < D; i++) {
        tmp_sum *= grid_nums[h + i][w - i];
      }
      // tmp_sumが大きければ答えの候補としてメモリに格納する
      tmp_sum < calc_result || (calc_result = tmp_sum)
    }
  }
}

console.log(calc_result);
