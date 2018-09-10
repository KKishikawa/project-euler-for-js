# 素因数分解のメソッドを利用
# require_relative '../functions/count_divisor.rb'
require 'prime'
count = 500
sum = 3
next_num = 3
divisor_count = 0
until divisor_count > count
  sum += next_num
  next_num += 1
  divisor_count = Prime.prime_division(sum).map { |_, p| p + 1 }.inject(&:*)
end

puts sum
