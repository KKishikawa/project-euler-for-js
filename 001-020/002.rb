num1 = 1
num2 = 2
sum = 0

while num2 <= 4_000_000
  sum += num2 if num2.even?
  num1, num2 = num2, (num1 + num2)
end

puts sum
