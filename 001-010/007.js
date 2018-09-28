function answer() {
    var primes = [2];
    var n = 10001;
    var count = 1;
    main: for (var i = 3; count < n; i += 2) {
        // 003や005と同じように素数を集め、それで割れなければ素数と判定。
        for (var item of primes) {
            if (i % item === 0) {
                continue main;
            }
        }
        primes.push(i);
        count++;
    }
    return primes[n-1];
}

console.log(answer());