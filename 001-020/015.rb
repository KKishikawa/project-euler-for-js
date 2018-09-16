# 最短経路問題
# n×mのグリッドのとき、(n+m)!/n!m!

# 階乗を求める関数
def factrial(num)
  num.zero? ? 1 : factrial(num - 1) * num
end

n = 20
m = 20
puts factrial(n + m) / (factrial(n) * factrial(m))
