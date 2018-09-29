# 1000までの数の文字列の合計を求めるプログラム
max_num = 1000

#  three hundred and forty-two => 23
#  one hundred and fifteen => 20

#  one, two, three, four, five, six, seven, eight, nine
#  ゼロの時はカウントしない
under_ten = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4]

# ten, eleven, twelve, thirteen, fourteen, fifteen,
# sixteen, seventeen, eighteen, nineteen
under_twelve = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8]

#  ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety
under_hundred = [3, 6, 6, 5, 5, 5, 7, 6, 6]

hundred = 7

#  1から1000まで文字数を調べる
#  1000よりも大きい数字は調べられない仕様
str_sum = 0
for i in range(1, max_num + 1):
    #  one thousandの文字数を足す
    if i == 1000:
        str_sum += 11
        break
    #  桁ごとの操作がしやすいように文字列に変換
    i_str = str(i)
    #  下2桁を取り出す
    dig2 = int(i_str[-2:])
    if i >= 100:
        str_sum += under_ten[int(i_str[0])] + hundred
        #  １桁目、２桁目のどちらかが存在するとandが付く
        if dig2 != 0:
            str_sum += 3

    if dig2 >= 10:
        if dig2 <= 19:
            #  10から19までの数字は数え方が特殊
            str_sum += under_twelve[int(i_str[-1])]
            continue
        else:
            str_sum += under_hundred[int(i_str[-2]) - 1]
    str_sum += under_ten[int(i_str[-1])]


print(str_sum)
