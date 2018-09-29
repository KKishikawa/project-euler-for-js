import functools
import string
import os

names = None
# 問題を読み込む
filename = 'p022_names.txt'
path = os.path.join(os.path.dirname(__file__), filename)
with open(path) as f:
    names = f.read().strip().replace('\"', '').split(',')
names.sort()

alphabet = string.ascii_uppercase
result = sum(
    sum(alphabet.find(s) + 1 for s in name) * i
    for i, name in enumerate(names, 1))

print(result)
