# amicable number under 10000
# 素数を扱う
require 'prime'

# Arrayクラスに配列A,Bのそれぞれの要素同士の積をすべて求めるメソッドを追加
class Array
  def calc_all_products(arr)
    product(arr).map { |e| e.inject(:*) }
  end
end

# Integerクラスに約数リストを求めるメソッドを追加
class Integer
  # 素因数分解の結果から約数のリストを求める
  def divisors
    return [1] if self == 1
    # 素因数をその指数に応じて添加したリストを作成する。
    tmp_num_list = Prime.prime_division(self).map do |e|
      Array.new(e[1] + 1).map.with_index { |_, i| e[0]**i }
    end

    tmp_num_list.inject { |a, b| a.calc_all_products(b) } .sort
  end
end

amicables = []

(1...10_000).each do |i|
  next if amicables.include? i
  num1 = i.divisors.slice(0..-2).inject(:+)
  next if num1 == i || num1.nil?
  num2 = num1.divisors.slice(0..-2).inject(:+)
  amicables.push(num1, num2) if num2 == i
end

p amicables
puts amicables.inject(:+) # 解
