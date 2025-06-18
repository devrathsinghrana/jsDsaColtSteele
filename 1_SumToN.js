const sumToN = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
const sumToN2 = (n) => (n * (n + 1)) / 2;
const T1 = performance.now();
const res = sumToN(5);
console.log(res);
const T2 = performance.now();
console.log(T2 - T1);

const T3 = performance.now();
const res2 = sumToN2(5);
console.log(res2);
const T4 = performance.now();
console.log(T4 - T3);
