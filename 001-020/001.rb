ans = 0

for i in 0..1000
  if (i % 3).zero? || (i % 5).zero?
    ans += i
  end
end

puts ans
