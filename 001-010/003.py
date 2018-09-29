target_num = 600_851_475_143
calc_num = target_num
i = 3
factors = [2]

while i <= calc_num:
    if target_num % i != 0:
        i += 1
        continue
    calc_num /= i
    for factor in factors:
        if i % factor != 0:
            factors.append(i)
            break
    i += 1

ans = factors[len(factors) - 1]

print(ans)
