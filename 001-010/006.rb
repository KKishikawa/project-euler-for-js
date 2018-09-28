sum_sq = 0
sq_sum = 0

(1..100).each do |i|
  sum_sq += i**2
  sq_sum += i
end

sq_sum **= 2

puts sq_sum - sum_sq
