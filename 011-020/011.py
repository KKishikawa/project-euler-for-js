import os

# 問題を読み込む
grid_nums = None

filename = '011.data.txt'
path = os.path.join(os.path.dirname(__file__), filename)
with open(path) as f:
    grid_nums = [list(map(int, s.split(' '))) for s in f.readlines()]

d = 4
grid_size = len(grid_nums)
max_index = grid_size - d
calc_result = 0

for h in range(grid_size):
    for w in range(grid_size):
        # 横の積
        if w <= max_index:
            tmp_sum = 1
            for a in range(d):
                tmp_sum *= grid_nums[h][w + a]
            if calc_result < tmp_sum:
                calc_result = tmp_sum

        # 縦の積
        if h > max_index:
            continue
        tmp_sum = 1
        for a in range(d):
            tmp_sum *= grid_nums[h + a][w]
        if calc_result < tmp_sum:
            calc_result = tmp_sum

        # 斜めの積 斜めの場合、上から下に足すので縦の条件は同じ
        # 斜めで、左上から右下に評価していく時
        if w <= max_index:
            tmp_sum = 1
            for a in range(d):
                tmp_sum *= grid_nums[h + a][w + a]
            if calc_result < tmp_sum:
                calc_result = tmp_sum
        # 斜めで、右上から左下に評価していく時
        if w < d - 1:
            continue
        tmp_sum = 1
        for a in range(d):
            tmp_sum *= grid_nums[h + a][w - a]
        if calc_result < tmp_sum:
            calc_result = tmp_sum

print(calc_result)
