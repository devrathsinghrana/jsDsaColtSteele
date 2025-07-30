const totalArraySum = (arr: number[]): number => {
    let sum: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// Space Complexity: O(1) as we are using a constant amount of space for the sum variable regardless of the size of the input array i.e. sum and i variables will have a constant space usage no matter how large the size of array is.

const doubleArrayValues = (arr: number[]): number[] => {
    let newArr: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

//Space Complexity: O(n) as we are creating a new array that is the same size as the input array. The space used by the new array grows linearly with the size of the input array.

// Primitives like undefined, null, boolean, number, string, and symbol take up a constant amount of space in memory. They do not grow with the size of the input data.
// Objects and arrays, however, can grow in size, and their space complexity is determined by the number of elements they contain.
// String is a special case as it is an array of characters, and its space complexity is O(n) where n is the length of the string. Each character takes up a constant amount of space, but the total space used grows with the length of the string.

// Generally, the space complexity of algorithm is auxiliary space used by the algorithm, which is the space required for variables, data structures, and function calls that grow with the size of the input data not input data itself. i.e, in example 1 even if array is of size 100, we are using only a constant amount of space for sum variable, so space complexity is O(1) not O(n).i.e we ignore the size of input array and only focus on new variable being made inside function and their types to decide space complexity.

export { totalArraySum, doubleArrayValues };
