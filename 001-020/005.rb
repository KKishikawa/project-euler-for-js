# 変数を初期化する
prime_nums = []
product = 1

(2...20).each do |i|
  # 既に約数に含まれていれば次の数字を検証する
  next if (product % i).zero?
  divided = i

  # 素因数分解の要領で積に含まれていない因数を調べる
  prime_nums.each do |j|
    divided /= j if (divided % j).zero?
  end
  # 次に計算しやすいように配列に格納
  prime_nums.push(divided)
  # 積を求めておく
  product *= divided
end

puts product
