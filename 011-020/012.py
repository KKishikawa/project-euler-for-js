# 約数の数を数える
def divisor_count(num):
    if num == 1:
        return 1
    if num < 1:
        return 0
    result = 1

    calcNum = num
    count = 0

    while calcNum % 2 == 0:
        calcNum //= 2
        count += 1

    if count != 0:
        result *= count + 1

    suggest_prime = 3
    while suggest_prime <= calcNum:
        count = 0
        while calcNum % suggest_prime == 0:
            calcNum //= suggest_prime
            count += 1
        if count != 0:
            result *= count + 1
        suggest_prime += 2

    return result

count = 500
triangle = 1

tmp_num = 2
while divisor_count(triangle) <= count:
    triangle += tmp_num
    tmp_num += 1

print(triangle)
