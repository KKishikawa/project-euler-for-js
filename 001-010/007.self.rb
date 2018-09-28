# ライブラリを使わずに自己実装
# ライブラリを使用した時やjavascriptでの処理に比べて10倍時間がかかる
# 巨大な配列を処理するのに時間がかかるのが原因?

primes = [2]
n_th = 10_001
count = 1

suggest_number = 1
while count < n_th
  suggest_number += 2
  # 既に約数に含まれていなければ、それを次の素数とする
  if primes.none? { |prime| (suggest_number % prime).zero? }
    primes.push(suggest_number)
    count += 1
  end
end

puts primes[-1]
