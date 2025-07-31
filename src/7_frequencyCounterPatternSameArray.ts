/*
Problem statement
We have two arrays of positive integers
[1,2,3] [1,9,4]

We want to check if the two arrays have the same frequency of elements and if the second array is a perfect square of the first array.
For example, the first array has 1, 2, and 3, and the second array has 1, 9, and 4.
If we square each element of the first array, we get 1, 4, and 9, which matches the second array.
Irrespective of the order of elements, we want to check if the two arrays have the same frequency of elements.
*/

// Method 1 - Brute Force

type CheckForSameFrequency = (a: number[], b: number[]) => boolean;
const checkForSameFrequencyOfSquaredElementsBruteForceWay: CheckForSameFrequency =
  (inpArrOne, inpArrTwo) => {
    // we will check if size of two arrays are same else return false
    if (inpArrOne.length !== inpArrTwo.length) return false;
    // if size of two arrays arrays are same
    //first we will loop over first array using it's index
    for (let i: number = 0; i < inpArrOne.length; i++) {
      //Then we will search for each element squared value in second array and return the index of that element in second array

      if (inpArrOne[i] <= 0 || inpArrTwo.indexOf(inpArrOne[i] ** 2) === -1) {
        // if element is not found or first array element is not positive integer then we will terminate the function execution using return keyword
        return false;
      }
      // Now using this returned index we will remove that element from second array so that we can accurately identify if the frequency or count of occurrence of particular element in first array is same

      inpArrTwo.splice(inpArrTwo.indexOf(inpArrOne[i] ** 2), 1);
    }
    return true;
  };
console.log(
  checkForSameFrequencyOfSquaredElementsBruteForceWay([1, 2, 3], [1, 9, 4, 5])
);
console.log(
  checkForSameFrequencyOfSquaredElementsBruteForceWay([1, 2, 3], [1, 9, 4])
);
console.log(
  checkForSameFrequencyOfSquaredElementsBruteForceWay([1, 2, 3], [1, 1, -1])
);
// Time Complexity is O(n^2) as we are looping first array then inside for we have used indexOf which again has complexity of O(n)
// Space complexity is O(1) as only one variable i of number type is created

// Method 2 - Using Frequency Counter Pattern
// In frequency counter pattern we will create two objects to store the frequency of elements in both arrays
/*
[1, 2, 3], [1, 9, 4]
{1:1,2:1,3:1},{1:1,9:1,4:1}

So what is the benefit of using frequency counter pattern?
First benefit is we prevent nesting of loops as we have separate for loop for both arrays when preparing these frequency objects.
Second benefit is we can easily check if the frequency of elements in both arrays are same by comparing the two objects.
And also if properties of object2 is squared of property of object1. Which easily achieves our objective
*/

const checkForSameFrequencyOfSquaredElementsFrequencyPattern: CheckForSameFrequency =
  (inpArrOne, inpArrTwo) => {
    if (inpArrOne.length !== inpArrTwo.length) return false;
    // convert first array in object containing its frequency

    const frequencyObjectOne: Record<number, number> = {};
    for (const curr of inpArrOne) {
      if (curr <= 0) return false;
      frequencyObjectOne[curr] = (frequencyObjectOne[curr] || 0) + 1;
    }

    const frequencyObjectTwo: Record<number, number> = {};
    for (const curr of inpArrTwo) {
      if (curr <= 0) return false;
      frequencyObjectTwo[curr] = (frequencyObjectTwo[curr] || 0) + 1;
    }

    for (const key in frequencyObjectOne) {
      const keyNum = Number(key);
      const squaredKey = keyNum ** 2;
      if (!frequencyObjectTwo.hasOwnProperty(squaredKey)) return false;
      if (frequencyObjectOne[keyNum] !== frequencyObjectTwo[squaredKey])
        return false;
    }
    return true;
  };

  console.log(
  checkForSameFrequencyOfSquaredElementsFrequencyPattern([1, 2, 3], [1, 9, 4, 5])
);
console.log(
  checkForSameFrequencyOfSquaredElementsFrequencyPattern([1, 2, 3], [1, 9, 4])
);
console.log(
  checkForSameFrequencyOfSquaredElementsFrequencyPattern([1, 2, 3], [1, 1, -1])
);