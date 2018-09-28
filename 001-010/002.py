num1 = 1
num2 = 2
sum = 0

while num2 <= 4_000_000:
  if num2 % 2 == 0:
    sum += num2
  num1, num2 = num2, (num1 + num2)

print(sum)
