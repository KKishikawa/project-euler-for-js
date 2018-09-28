# ruby特有のループ、条件分岐の書き方に書き換えてあるが、
# 解を求めるアルゴリズムは、javascriptのコードと同じ
def feb_days(year)
  if (year % 400).zero? || (year % 100 != 0 && (year % 4).zero?)
    29
  else
    28
  end
end

def month_days(month, year)
  if month == 2
    feb_days(year)
  elsif [4, 6, 9, 11].include?(month)
    30
  else
    31
  end
end

day_week = (4 * 30 + 6 * 31 + feb_days(1900)) % 7
sundays = 0

1901.upto(2000) do |year|
  12.times do |month|
    if month.zero?
      tmp_m = 12
      tmp_y = year - 1
    else
      tmp_m = month
      tmp_y = year
    end
    day_week += month_days(tmp_m, tmp_y) % 7
    day_week -= 7 if day_week > 6
    sundays += 1 if day_week == 6
  end
end

puts sundays
