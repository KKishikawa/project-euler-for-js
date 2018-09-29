def not_divisible(num, primes):
    for prime in primes:
        if suggest_number % prime == 0:
            return False
    return True

n_th = 10_001
primes = [2]
suggest_number = 1

while True:
    suggest_number += 2
    # 既に約数に含まれていなければ、それを次の素数とする
    if not_divisible(suggest_number, primes):
        primes.append(suggest_number)
        if len(primes) == n_th:
            break

print(primes[-1])
