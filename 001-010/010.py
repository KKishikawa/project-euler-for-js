def primes(num):
    is_prime_list = [True] * (num + 1)
    is_prime_list[0] = False
    is_prime_list[1] = False
    for i in range(2, int(num**0.5) + 1):
        if not is_prime_list[i]:
            continue
        for j in range(i*2, num + 1, i):
            is_prime_list[j] = False
    return [i for i in range(num+1) if is_prime_list[i]]

amount = 2_000_000

result = 0
for prime in primes(amount):
    result += prime

print(result)
