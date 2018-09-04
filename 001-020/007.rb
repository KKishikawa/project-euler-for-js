require 'prime'
# 組み込みを使うと一瞬
# 以降の問題では、primeライブラリは自己実装しないことにする
puts Prime.take(10_001)[-1]
