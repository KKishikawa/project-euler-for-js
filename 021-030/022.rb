# ファイルを読み込み、ソートする
names = nil
File.open(File.expand_path('p022_names.txt', __dir__), 'r') do |f|
  names = f.read.delete('\"').split(',')
end
names.sort!

# AからZまでの配列を得る
alphabet = ('A'..'Z').to_a

# 各名前要素におけるalphabetical valueにsort順の重みを掛けた値を算出し、足し合わせる
result = names.each.with_index(1).inject(0) do |sum, (name, index)|
  alp_val = name.chars.inject(0) { |a, b| a + alphabet.index(b) + 1 }
  sum + index * alp_val
end

puts result
