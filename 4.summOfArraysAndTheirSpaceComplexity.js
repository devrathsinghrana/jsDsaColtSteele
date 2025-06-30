const totalArraySum = (arr) => {
    let sum=0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// Space Complexity: O(1) as we are using a constant amount of space for the sum variable regardless of the size of the input array i.e. sum and i variables will have a constant space usage no matter how large the size of array is.

const doubleArrayValues = (arr) => {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

//Space Complexity: O(n) as we are creating a new array that is the same size as the input array. The space used by the new array grows linearly with the size of the input array.