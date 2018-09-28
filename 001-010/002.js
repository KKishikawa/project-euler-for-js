function answer() {
    // 400万以下の項を求める
    var num1 = 1;
    var num2 = 2; // 第2項を指定しておく
    var sum = 0;
    do {
        if ((num2 % 2) === 0) {
            sum += num2;
        }
        // フィボナッチ数列の次の項をnum2に、それの前の項をnum1に保持しておく
        // javascriptの分割代入を利用して変数のスワップを行っている。 (num1 <- num2)
        [num1, num2] = [num2, num1 + num2];
    } while (num2 <= 4000000);
    return sum;
}


console.log(answer());