import functools

num = 2
pow = 1000

calc = num**pow

print(functools.reduce(lambda a, b: a + int(b), str(calc), 0))
