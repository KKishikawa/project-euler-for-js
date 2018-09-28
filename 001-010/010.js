function answer() {
    var primes = [2];
    var n = 2000000;
    var sum = primes[0];
    var sq = Math.sqrt(n);

    main: for (var i = 3; i < n; i += 2) {
        // 003や005と同じように素数を集め、それで割れなければ素数と判定。
        for (var item of primes) {
            if (i % item === 0) {
                continue main;
            }
        }
        sum += i;

        // 素数のチェックリストが肥大化すると計算が遅くなってしまう。
        // n までの数の約数ともなる数は最大でも sqrt(n)以下である。
        // それよりも大きい数がnまでの数の約数になる場合、
        // 自分 × 自分よりも小さい素因数となる
    
        if(i <= sq){
            primes.push(i);
        }
    }
    return sum;
}

console.log(answer());