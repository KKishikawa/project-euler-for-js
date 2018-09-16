//1000までの数の文字列の合計を求めるプログラム
var input = 1000;

// three hundred and forty-two => 23
// one hundred and fifteen => 20

// one, two, three, four, five, six, seven, eight, nine
// ゼロの時はカウントしない
var underTen = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4];

//ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
var underTwelve = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8];

// ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety
var underHundred = [3, 6, 6, 5, 5, 5, 7, 6, 6];

var hundred = 7;
var thousand = 8;

// 1から1000まで文字数を調べる
// 1000よりも大きい数字は調べられない仕様
var strSum = 0;
for (var i = 1; i <= input; i++) {
  // one thousandの文字数を足す
  if (i === 1000) {
    strSum += 11;
    break;
  }
  // 桁ごとの操作がしやすいように文字列に変換
  var str = i.toString();
  var leng = str.length;
  // 下2桁を取り出す
  var dig2 = parseInt(str.substr(-2, 2), 10);
  if (i >= 100) {
    strSum += underTen[parseInt(str[0], 10)] + hundred;
    // １桁目、２桁目のどちらかが存在するとandが付く
    if (dig2 != 0) {
      strSum += 3;
    }
  }
  if (dig2 >= 10) {
    if (dig2 <= 19) {
      // 10から19までの数字は数え方が特殊
      strSum += underTwelve[parseInt(str.substr(-1, 1), 10)];
      continue;
    } else {
      strSum += underHundred[parseInt(str.substr(-2, 1), 10) - 1];
    }
  }
  strSum += underTen[parseInt(str.substr(-1, 1), 10)];
}


console.log(strSum);
