ans = 0

(0...1000).each do |i|
  ans += i if (i % 3).zero? || (i % 5).zero?
end

puts ans
