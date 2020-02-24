// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let counter = 0;
  if (numbers === []) {
    return 0;
  } else {
    for (i = 0; i < numbers.length; i++) {
      counter = counter + numbers[i];
    }
  }
  return counter;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max.apply(null, numbers);
}

// Return the longest string in an array
function longestString(strings) {
  return strings.sort(function(a, b) {
    return b.length - a.length;
  })[0];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array

function findUnique(wordsArr) {
  if (wordsArr == []) {
    return false;
  } else {
    let uniques = wordsArr.filter(function(a) {
      return wordsArr.indexOf(a) == wordsArr.lastIndexOf(a);
    });
    return uniques[0];
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  return Math.max(
    ...matrix.map(i => (Array.isArray(i) ? maxTwoDimArray(i) : i))
  );
}
