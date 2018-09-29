import os

# 問題を読み込む
sum = 0
filename = '013.data.txt'
path = os.path.join(os.path.dirname(__file__), filename)
with open(path) as f:
    for line in f.readlines():
        sum += int(line)

print(str(sum)[0:10])
