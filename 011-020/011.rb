# grid is N × N
N = 20
# d個数を抽出するので
d = 4
max_index = N - d

# 問題を読み込む
grid_nums = []
File.open(File.expand_path('011.data.txt', __dir__), 'r') do |f|
  f.each_line { |line| grid_nums << line.split(' ').map(&:to_i) }
end

calc_result = 0
N.times do |h|
  N.times do |w|
    # 横の積
    if w <= max_index
      tmp_sum = 1
      d.times { |a| tmp_sum *= grid_nums[h][w + a] }
      calc_result = tmp_sum if calc_result < tmp_sum
    end

    # 縦の積
    next unless h <= max_index
    tmp_sum = 1
    d.times { |a| tmp_sum *= grid_nums[h + a][w] }
    calc_result = tmp_sum if calc_result < tmp_sum

    # 斜めの積 斜めの場合、上から下に足すので縦の条件は同じ
    # 斜めで、左上から右下に評価していく時
    if w <= max_index
      tmp_sum = 1
      d.times { |a| tmp_sum *= grid_nums[h + a][w + a] }
      calc_result = tmp_sum if calc_result < tmp_sum
    end
    # 斜めで、右上から左下に評価していく時
    next unless w >= d - 1
    tmp_sum = 1
    d.times { |a| tmp_sum *= grid_nums[h + a][w - a] }
    calc_result = tmp_sum if calc_result < tmp_sum
  end
end

puts calc_result
