// javascriptの特性として、文字の結合と和演算が同じ記号なので、
// 型に気を付ける必要がある。

// 2つの3桁の数の積の最大は 999 × 999 ≒ 1000000
// 最小は 100×100 = 10000
// 7桁や5桁だと回文積にならないので、6桁になることが予想される

function answer() {
    var flagment = 999;
    var target = 0;
    for (var i = flagment; i >= 100; i--) {
        // 反転した文字列を得るために以下の手順を踏む
        // この方法を使う理由としては、Arrayのメソッドの "reverse()" を使うため
        // 数値 -> 文字列, 文字列 -> 配列, 配列を反転させる, 配列 -> 文字列
        target = Number('' + i + i.toString(10).split('').reverse().join(''));

        for (var j = 100; j <= 999; j++) {
            if ((target % j) === 0 && (target / j).toString(10).length === 3) {
                return target
            }
        }
    }
    return 'not Matched'
}

console.log(answer());