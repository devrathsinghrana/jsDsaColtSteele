// logarithmic time complexity is the inverse of exponentiation
// and we consider base 2 for general trend
// it's is considered best time complexity for any algorithm after constant time complexity
// log 8 = 3 means 2 raised to the power of 3 equals 8 or log base 2 of 8 is 3 
// Eg 
// Binary Search, finding an element in a sorted array

/*
Big O: O(log n)
Explanation:
In each iteration, we eliminate half of the remaining elements.
For an array of size n, we can eliminate elements at most log₂(n) times.
Even if n = 1,000, we need at most ~10 comparisons to find the element.

1000/2/2/2/2/2/2/2/2 = 10 iterations

2**10 = 1024, which is greater than 1000. or approximately log₂(1000) = 10.

This logarithmic reduction in search space leads to efficient searching.
This is why binary search is efficient for large datasets.


Space Complexity: O(1)
Explanation:
We only use a constant amount of extra space (left, right, mid variables).
*/
function binarySearch(arr: number[], target: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;
    
    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Search right half and skip mid index as it is already checked
        } else {
            right = mid - 1; // Search left half
        }
    }
    
    return -1; // Target not found
}

// Example usage:
const sortedArray: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(sortedArray, 7)); // Output: 3 (index of element 7)
console.log(binarySearch(sortedArray, 20)); // Output: -1 (not found)

export { binarySearch };
