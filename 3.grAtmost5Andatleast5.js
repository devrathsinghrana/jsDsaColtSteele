function getAtMost5(n) {
  for (let i = 1; i <= Math.min(n, 5); i++) {
    console.log(i);
  }
}

function getAtLeast5(n) {
  for (let i = 1; i <= Math.max(n, 5); i++) {
    console.log(i);
  }
}

// Big O: O(n)
getAtLeast5(100); // Will print numbers 1 to 100

// big O: O(1)
getAtMost5(100); // Will print numbers 1 to 5
