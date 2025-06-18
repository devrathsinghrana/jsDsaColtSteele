/*
 Big O: O(n)
Explanation:
This function uses a loop that runs from 1 to n. For each iteration, it adds the current number to total. As n increases, the number of operations increases linearly. So, the time complexity is linear.

Space Complexity: O(1)
Explanation:
The function only uses a fixed amount of extra space (total and i), regardless of the input size n. No additional data structures are created that grow with n.
 */
const sumToN = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
/*
Big O: O(1)
Explanation:
This function uses a mathematical formula to calculate the sum in a single step, regardless of the value of n. The number of operations does not depend on n, so the time complexity is constant.

Space Complexity: O(1)
Explanation:
This function uses only a constant amount of space for the calculation, regardless of n.
*/
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
