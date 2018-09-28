flagment_num = 999
calc_num = 0

# throw catchでループを抜けるようにする
catch(:break_loop) do
  while flagment_num >= 100
    # 文字列の結合を行った後、数値として処理を行う
    # reverseで文字列を反転させる
    calc_num = (flagment_num.to_s + flagment_num.to_s.reverse).to_i
    flagment_num -= 1

    # 約数で調べる必要があるのは、平方根よりも小さい数
    divisor_max = Math.sqrt(calc_num)
    (100...divisor_max).each do |i|
      # Math.log10().to_1 + 1 で数字の桁数を求める
      if (calc_num % i).zero? && Math.log10(calc_num / i).to_i == 2
        throw :break_loop
      end
    end
  end
end

puts calc_num
