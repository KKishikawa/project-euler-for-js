maximum = 0
length = 0
coll = [0, 1, 2]

for i in range(3, 1_000_001):
    tmp = 0
    calc = i
    while calc > len(coll) - 1:
        tmp += 1
        calc = calc // 2 if calc % 2 == 0 else calc * 3 + 1

    tmp += coll[calc]
    coll.append(tmp)
    if tmp > length:
        length = tmp
        maximum = i

print(maximum) # 解答
print(length)
