// 最短経路
// n×m => (n + m)! / n!m!

const factrial = num => {
  return num === 0 ? 1 : factrial(num - 1) * num;
};

const n = 20;
const m = 20;

console.log(factrial(n+m)/(factrial(n)*factrial(m)));
