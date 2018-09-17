nums = []
# 問題を読み込む
File.open('./001-020/018.data.txt') do |f|
  f.each do |line|
    nums << line.split(' ').map(&:to_i)
  end
end
# 下から順に値の大きい方だけ足していく
(nums.length - 2).downto(0) do |row|
  nums[row].length.times do |col|
    nums[row][col] += [nums[row + 1][col], nums[row + 1][col + 1]].max
  end
end

puts nums[0][0]
