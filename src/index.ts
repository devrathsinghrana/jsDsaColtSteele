// Sample TypeScript file to demonstrate ts-node execution
interface User {
  name: string;
  age: number;
  email?: string;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

function calculateSum(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Sample usage
const user: User = {
  name: "John Doe",
  age: 25,
  email: "john@example.com"
};

const numbers: number[] = [1, 2, 3, 4, 5];

console.log(greetUser(user));
console.log(`Sum of numbers: ${calculateSum(numbers)}`);
console.log("TypeScript is running with ts-node! 🚀");

export { greetUser, calculateSum };    export type { User };

