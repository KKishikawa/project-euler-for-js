require 'prime'
# 約数の数を求めるためのクラス
class Divisors
  def self.count(num)
    # 素因数分解して、それぞれの素数の指数+1の積を求める
    Prime.prime_division(num).map { |_, p| p + 1 }.inject(&:*)
  end
  # 大きな数になると、約数と約数が離れているので、無駄が多い
  # 自己実装
  #  def self.count(num)
  #    half = num / 2
  #    sum = 2 # どんな整数でも自分と1は約数
  #    2.upto(half) do |i|
  #      sum += 1 if (num % i).zero?
  #    end
  #    sum
  #  end
end
