import os

nums = None
# 問題を読み込む
filename = '018.data.txt'
path = os.path.join(os.path.dirname(__file__), filename)
with open(path) as f:
    nums = [list(map(int, line.split(' '))) for line in f.readlines()]

# 下から順に値の大きい方だけ足していく
for row in range(len(nums)-2, -1,-1):
    for col in range(len(nums[row])):
        nums[row][col] += max(nums[row + 1][col], nums[row + 1][col + 1])

print(nums[0][0])
