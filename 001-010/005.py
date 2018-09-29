divisors = []
result = 1

for i in range(2, 20):
    if result % i == 0:
        continue
    not_include_num = i
    for divisor in divisors:
        if not_include_num % divisor == 0:
            not_include_num //= divisor
    divisors.append(not_include_num)
    result *= not_include_num

print(result)
