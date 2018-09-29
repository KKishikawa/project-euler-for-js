import datetime
# 各年月の1日の曜日が日曜日の数だけ1を持つ配列を作成し、それを足す
count = 0
for year in range(1901, 2001):
    for month in range(1, 13):
        if datetime.date(year, month, 1).weekday() == 6:
            count += 1

print(count)
