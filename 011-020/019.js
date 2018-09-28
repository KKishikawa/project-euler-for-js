//うるう年を求める
let isLeapYear = function (year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return true;
  } else {
    return false;
  }
};

//2月の最終日を求める
let febDays = function (year) {
  return isLeapYear(year) ? 29 : 28;
};

//各月の最終日を求める
let monthDays = function (month, year) {
  if (month === 2) {
    return febDays(year);
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}

//初期の曜日として1900年12月1日の曜日を求める
// 0:Monday 1:Tuesday 2:Wednesday 3:Thursday 4:Friday 5:Saturday 6:Sunday
let dayWeek = (4 * 30 + 6 * 31 + febDays(1900)) % 7;
let sundays = 0;
//1901~2000までループ
for (let year = 1901; year <= 2000; year++) {
  //前の月の12月~今月の11月の最終日を求めて翌月の最初の曜日を求める
  for (let month = 0; month <= 11; month++) {
    let tmpM;
    let tmpY;
    if (month === 0) {
      tmpM = 12;
      tmpY = year - 1;
    } else {
      tmpM = month;
      tmpY = year;
    }
    dayWeek += monthDays(tmpM, tmpY) % 7;
    if (dayWeek > 6) {
      dayWeek -= 7;
    }
    if (dayWeek === 6) {
      sundays++;
    }
  }
}

console.log(sundays);
