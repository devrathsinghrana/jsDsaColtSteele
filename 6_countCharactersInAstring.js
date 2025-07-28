// simplify the problem
// we need to get count of each character in a string
// do we have inputs with special characters or only alpha numeric
// here we will assume only alpha numeric characters and convert them to lowercase to get count of alphabets, uppercase and lowercase will be treated as same

// we will use an object to store the count of each character

const isAlphaNumeric = (char) => {
  // Regex to check if the character is alphanumeric
  // return /^[a-z0-9]+$/i.test(char); // checks if the character is alphanumeric

  if (
    !(char.CharCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) && // 0-9
    !(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) && // A-Z
    !(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) // a-z
  ) {
    return false; // it's not alphanumeric
  }
  return true; // it's alphanumeric
};

const countCharactersInString = (str) => {
  const result = {};
  for (let char of str) {
    if (isAlphaNumeric(char))
      result[char.toLowerCase()] = ++result[char.toLowerCase()] || 1; // if character is not present in the object, it will be added with value 1, otherwise it will be incremented by 1
  }
  return result;
};

// Time complexity: O(n)
// Explanation: We iterate through each character in the string once, so the time complexity is linear
// Space complexity: O(k)
// Explanation: We use an object to store the count of each character, where k is the number of unique characters in the string. char is ignored as it is a constant space operation always having one character at a time so it is a string with length always 1 no matter the input

console.log(countCharactersInString("Hello World! 123")); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, ' ': 2, '1': 1, '2': 1, '3': 1 }
console.log(); // { j: 1, a: 2, v: 1, s: 2, c: 1, r: 1, i: 1, p: 1, t: 1, ' ': 2, e: 1, w: 1, o: 1, m: 1 };
