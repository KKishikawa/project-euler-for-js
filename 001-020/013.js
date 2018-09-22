// 013.data.txtを読み込む
let path = require('path');
let fs = require('fs');
let input_raw = fs.readFileSync(path.join(__dirname,'./013.data.txt'), 'utf-8');
let prob = input_raw.trim();

//100個足すので、
let a = prob.split(/\r\n|\r|\n/).reduce((a, b) => a + parseInt(b.substr(0, 13)), 0);

console.log(a.toString().substr(0,10));
