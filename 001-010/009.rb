# 和が1000のピタゴラス数を求める
# a < b < cなのを利用して、計算回数を減らす

target_sum = 1000
ans = 0
(1...target_sum / 3).each do |i|
  (i + 1...(target_sum - i) / 2).each do |j|
    k = target_sum - i - j
    if i * i + j * j == k * k
      ans = i * j * k
      break
    end
  end
end

puts ans
