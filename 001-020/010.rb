# 標準ライブラリを読み込む
require 'prime'

amount = 2_000_000

ans = Prime.each(amount).reduce { |sum, n| sum + n }
puts ans
