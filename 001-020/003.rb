target_num = 600_851_475_143
calc_num = target_num
i = 3
factors = [2]

while i <= calc_num
  unless (target_num % i).zero?
    i += 1
    next
  end
  calc_num /= i
  factors.each do |item|
    unless (i % item).zero?
      factors.push(i)
      break
    end
  end
  i += 1
end

ans = factors[factors.length - 1]

puts ans
