//愚直に3の倍数と5の倍数を求めて和を求めている

function answer() {
    var ans = 0;
    for (var i = 0; i < 1000; i++) {
        if ((i % 3) === 0 || (i % 5) === 0) {
            ans += i;
        }
    }
    return ans;
}

console.log(answer());