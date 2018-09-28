# ruby で一つ一つ計算しているとかなり時間がかかるので、
# メモリを活用する
# メモリを一切使わないときと比較して10倍の速さで計算できる
maximum = 0
length = 0
coll = [0, 1, 2]

3.upto(1_000_000) do |i|
  tmp = 0
  calc = i
  while calc > coll.length - 1
    tmp += 1
    calc = calc.even? ? calc / 2 : calc * 3 + 1
  end
  tmp += coll[calc]
  coll << tmp
  if tmp > length
    length = tmp
    maximum = i
  end
end

puts maximum # 解答
puts length
