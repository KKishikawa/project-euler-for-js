function answer() {
    var target = 600851475143;
    var factors = new Array();
    var tmpNum = target;

    // 1ずつインクリメントしてループすると終わらないので、計算回数を減らす。
    // 偶数は素因数ではないので、3から計算を開始し、奇数のみを調べる
    // Even number is not prime factor.
    mainloop: for (var i = 3; i <= tmpNum; i += 2) {
        if ((target % i) !== 0) {
            continue mainloop;
        }
        // 素因数分解の要領で、約数が見つかったら、割っていく
        // それが仮に素数じゃなくても、その約数に次の素因数は含まれていない
        // Prime factorization.
        tmpNum /= i;

        // 素因数分解の結果を配列に集めておき、
        // 新しく見つかった約数の約数にこれらが含まれていないことを確認
        // check exponent of prime factors.
        for (var item of factors) {
            if ((i % item) === 0) {
                continue mainloop;
            }
        }
        factors.push(i);
    }
    return factors[factors.length - 1];
}

console.log(answer());