# rubyの場合、メモリの制限がなければ桁落ちを気にしなくていい
num = 2
pow = 1000

puts((num**pow).to_s.split('').map(&:to_i).reduce(:+))
