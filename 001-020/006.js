function calc() {
    var sumSq = 0;
    var sqSum = 0;

    for (var i = 1; i <= 100; i++) {
        sumSq += i ** 2;
        sqSum += i;
    }
    sqSum **= 2;
    return sqSum - sumSq;
}

console.log(calc());