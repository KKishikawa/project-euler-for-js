sum = 0
# 013.data.txtを読み込む
File.open(File.expand_path('013.data.txt', __dir__), 'r') do |f|
  f.each do |line|
    # rubyでは非常に長い桁の整数をオーバーフローさせずに扱えるのでそのまま足し合わせる
    sum += line.to_i
  end
end


# 上から10桁(文字列の10文字)を取り出す
puts sum.to_s[0, 10]
