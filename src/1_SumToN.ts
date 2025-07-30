/*
 Big O: O(n)
Explanation:
This function uses a loop that runs from 1 to n. For each iteration, it adds the current number to total. As n increases, the number of operations increases linearly. So, the time complexity is linear.

Space Complexity: O(1)
Explanation:
The function only uses a fixed amount of extra space (total and i), regardless of the input size n. No additional data structures are created that grow with n.
 */
const sumToN = (n: number): number => {
  let total: number = 0;
  for (let i: number = 1; i <= n; i++) {
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
const sumToN2 = (n: number): number => (n * (n + 1)) / 2;

// Performance testing
const T1: number = performance.now();
const res: number = sumToN(5);
console.log(res);
const T2: number = performance.now();
console.log(T2 - T1);

const T3: number = performance.now();
const res2: number = sumToN2(5);
console.log(res2);
const T4: number = performance.now();
console.log(T4 - T3);

export { sumToN, sumToN2 };
