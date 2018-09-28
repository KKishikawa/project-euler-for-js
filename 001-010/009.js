function answer() {
    var sum = 1000;
    for (var i = 1; i < sum / 3; i++) {
        // b < c なので1000までループを回す必要はない
        for (var j = i + 1; j < (sum - i)/2; j++) {
            if (i * i + j * j === (sum - i - j) ** 2) {
                return i * j * (sum - i - j);
            }
        }
    }
}

console.log(answer());