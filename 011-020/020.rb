# 基本的には問16の解き方と同じ

# 階乗を求める関数
def factrial(num)
  num.zero? ? 1 : factrial(num - 1) * num
end

result = factrial(100)

puts result.to_s.split('').map(&:to_i).reduce(:+)
