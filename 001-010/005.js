function calc(upper) {
    var calcNum = 1;
    var factors = new Array();
    var divided = 1;

    main: for (var i = 2; i <= upper; i++) {
        if ((calcNum % i) === 0) {
            // calcNumはiの倍数
            continue main;
        }

        // calcNumにiの約数が含まれていない場合、どの素因数が含まれていないか洗い出す
        // if calcNum do not have i's divisor, collecting prime factor
        divided = i;
        for (var item of factors) {
            if ((divided % item) === 0) {
                divided /= item;
            }
        }
        factors.push(divided);
        calcNum *= divided;
    }
    return calcNum;
}

console.log(calc(20));