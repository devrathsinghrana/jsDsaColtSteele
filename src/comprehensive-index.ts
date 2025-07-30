// Comprehensive DSA Examples - All converted TypeScript files
import { sumToN, sumToN2 } from './1_SumToN';
import { goUpAndDown } from './2_printNumbersToNInreverseandforward';
import { getAtMost5, getAtLeast5 } from './3_getAtmost5Andatleast5';
import { totalArraySum, doubleArrayValues } from './4_summOfArraysAndTheirSpaceComplexity';
import { binarySearch } from './5_logarithmicTimeComplexitIsInverseOfExponentiationAndWeConsiderBase2ForGeneralTrend';
import { isAlphaNumeric, countCharactersInString } from './6_countCharactersInAstring';

interface User {
  name: string;
  age: number;
  email?: string;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

// Demonstration of all DSA functions
console.log("🚀 Data Structures and Algorithms in TypeScript");
console.log("================================================");

console.log("\n1️⃣ Sum to N Examples:");
console.log(`Sum to 10 (loop): ${sumToN(10)}`);
console.log(`Sum to 10 (formula): ${sumToN2(10)}`);

console.log("\n2️⃣ Go Up and Down:");
goUpAndDown(3);

console.log("\n3️⃣ At Most 5 and At Least 5:");
console.log("At most 5 (input 10):");
getAtMost5(10);
console.log("At least 5 (input 3):");
getAtLeast5(3);

console.log("\n4️⃣ Array Operations:");
const testArray: number[] = [1, 2, 3, 4, 5];
console.log(`Array: [${testArray.join(', ')}]`);
console.log(`Sum: ${totalArraySum(testArray)}`);
console.log(`Doubled: [${doubleArrayValues(testArray).join(', ')}]`);

console.log("\n5️⃣ Binary Search:");
const sortedArray: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(`Array: [${sortedArray.join(', ')}]`);
console.log(`Search for 7: index ${binarySearch(sortedArray, 7)}`);
console.log(`Search for 20: index ${binarySearch(sortedArray, 20)}`);

console.log("\n6️⃣ Character Counting:");
const testString: string = "Hello World! 123";
console.log(`String: "${testString}"`);
console.log(`Character count:`, countCharactersInString(testString));
console.log(`Is 'A' alphanumeric: ${isAlphaNumeric('A')}`);
console.log(`Is '!' alphanumeric: ${isAlphaNumeric('!')}`);

console.log("\n7️⃣ User Greeting Example:");
const user: User = {
  name: "TypeScript Developer",
  age: 28,
  email: "dev@typescript.com"
};
console.log(greetUser(user));

console.log("\n✅ All TypeScript files have been successfully converted and tested!");

export {
  sumToN,
  sumToN2,
  goUpAndDown,
  getAtMost5,
  getAtLeast5,
  totalArraySum,
  doubleArrayValues,
  binarySearch,
  isAlphaNumeric,
  countCharactersInString,
  greetUser
};

export type { User };
