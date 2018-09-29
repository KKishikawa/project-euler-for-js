def sum_divisors_not_own(num):
    if num == 1:
        return 1
    result = 0
    for i in range(1, num):
        if num % i != 0:
            continue
        result += i
    return result

def is_amicable(num):
    num1 = sum_divisors_not_own(num)
    if num1 == num:
        return False
    num2 = sum_divisors_not_own(num1)
    if (num2 == num):
        return True
    return False

amicables = [i for i in range(6, 10000) if is_amicable(i)]

print(sum(amicables))
