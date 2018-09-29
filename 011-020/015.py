import math

# 最短経路
# n×m => (n + m)! / n!m!
n = 20
m = 20
print(math.factorial(n + m) // (math.factorial(n) * math.factorial(m)))
