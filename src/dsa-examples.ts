// Example: Data Structures and Algorithms in TypeScript
// This file demonstrates some basic algorithms

/**
 * Calculate sum from 1 to N
 */
function sumToN(n: number): number {
  return n * (n + 1) / 2;
}

/**
 * Print numbers in reverse order
 */
function printNumbersReverse(n: number): void {
  console.log(`Numbers from ${n} to 1:`);
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

/**
 * Count characters in a string
 */
function countCharacters(str: string): Record<string, number> {
  const charCount: Record<string, number> = {};
  
  for (const char of str.toLowerCase()) {
    if (char !== ' ') {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  
  return charCount;
}

/**
 * Calculate time complexity demo
 */
function timeComplexityDemo(): void {
  console.log("Time Complexity Examples:");
  console.log("O(1) - Constant time");
  console.log("O(log n) - Logarithmic time");
  console.log("O(n) - Linear time");
  console.log("O(n²) - Quadratic time");
}

// Example usage
console.log("🔢 DSA Examples with TypeScript");
console.log("================================");

console.log(`Sum to 10: ${sumToN(10)}`);
console.log("");

printNumbersReverse(5);
console.log("");

const text = "Hello World";
const charCount = countCharacters(text);
console.log(`Character count for "${text}":`, charCount);
console.log("");

timeComplexityDemo();

export { sumToN, printNumbersReverse, countCharacters, timeComplexityDemo };
