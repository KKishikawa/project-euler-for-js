# 和が1000のピタゴラス数を求める
# a < b < cなのを利用して、計算回数を減らす

target_sum = 1000
ans = 0
for i in range(target_sum // 3):
    for j in range(i + 1, target_sum // 2):
        k = target_sum - i - j
        if i * i + j * j == k * k:
            ans = i * j * k
            break
print(ans)
