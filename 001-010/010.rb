# 標準ライブラリを読み込む
require 'prime'

amount = 2_000_000

ans = Prime.each(amount).reduce(:+)
puts ans
