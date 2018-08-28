'use strict';

/**
 * 1. EVEN OR ODD
 * Big-O: O(1) because the number of operations
 * performed does not depend on the size/value
 * of the input.
 */

function isEven(value){
  // O(1) : always only a single operation
  if (value % 2 === 0){
    // return === constant time
    return true;
  }
  else
    // return === constant time
    return false;
}

/**
 * 2. ARE YOU HERE?
 * Big-O: O(n^2)
 */

function areYouHere(arr1, arr2) {
  // O(n) - looping through array will
  // depend on the size of array
  for (let i=0; i<arr1.length; i++) {
    // assignment === constant time
    const el1 = arr1[i];
    // O(n) - looping through array will
    // depend on the size of array. However,
    // this is a nested loop so the overall
    // complexity is now O(n^2)
    for (let j=0; j<arr2.length; j++) {
      // assignment === constant time
      const el2 = arr2[j];
      // comparison === constant time
      if (el1 === el2) return true;
    }
  }
  // return === constant time
  return false;
}

/**
 * 3. DOUBLER
 * Big-O: O(n)
 */

function doubleArrayValues(array) {
  // O(n) - looping through array will
  // depend on the size of array
  for (let i=0; i<array.length; i++) {
    // O(1) - assignment === constant time
    array[i] *= 2;
  }
  // return === constant time
  return array;
}

/**
 * 4. NAÏVE SEARCH
 * Big-O: O(n)
 */

function naiveSearch(array, item) {
  // O(n) - looping through array will
  // depend on the size of array
  for (let i=0; i<array.length; i++) {
    // comparison === constant time
    if (array[i] === item) {
      // return === constant time
      return i;
    }
  }
}

/**
 * 5. CREATING PAIRS
 * Big-O: O(n^2)
 */

function createPairs(arr) {
  // O(n) - looping through array will
  // depend on the size of array
  for (let i = 0; i < arr.length; i++) {
    // O(n) - looping through array will
    // depend on the size of array. However,
    // this is a nested loop so the overall
    // complexity is now O(n^2)
    for(let j = i+1; j < arr.length; j++) {
      // O(1) - logging === constant time
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}

/**
 * 6. COMPUTING FIBONACCIS
 * Big-O: O(n)
 */

function generateFib(num) {
  // O(1) - assignment === constant time
  let result = [];
  // O(n) - iterating through nums 
  // will depend on the value of the num
  for (let i = 1; i <= num; i++) {
    // O(1) - comparison === constant time
    if (i === 1) {
      // O(1) - assignment === constant time
      result.push(0);
    }
    // O(1) - comparison === constant time
    else if (i === 2) {
      // O(1) - assignment === constant time
      result.push(1);
    }
    else {
      // O(1) - math & assignment both === constant time
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // O(1) - return === constant time
  return result;
}

/**
 * 7. AN EFFICIENT SEARCH
 * Big-O: O(log n)
 */

function efficientSearch(array, item) {
  // O(1) - assignment === constant time
  let minIndex = 0;
  // O(1) - assignment === constant time
  let maxIndex = array.length - 1;
  // O(1) - initialization === constant time
  let currentIndex;
  // O(1) - initialization === constant time
  let currentElement;

  // ?? - How to categorize this line?
  // O(log n) - looping through an array would
  // normally be O(n), but the size  of the
  // data being processed here is cut in
  // half each time the loop executes
  while (minIndex <= maxIndex) {
    // O(1) - assignment === constant time
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    // O(1) - assignment === constant time
    currentElement = array[currentIndex];

    // O(1) - comparison === constant time
    if (currentElement < item) {
      // O(1) - assignment === constant time
      minIndex = currentIndex + 1;
    }
    // O(1) - comparison === constant time
    else if (currentElement > item) {
      // O(1) - assignment === constant time
      maxIndex = currentIndex - 1;
    }
    else {
      // O(1) - return === constant time
      return currentIndex;
    }
  }
  // O(1) - return === constant time
  return -1;
}

/**
 * 8. RANDOM ELEMENT
 * Big-O: O(1)
 */

function findRandomElement(arr) {
  // O(1) - maths & array lookup are both === constant time
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * 9. IS IT PRIME?
 * Big-O: O(n)
 */

function isPrime(n) {
  // O(1) - comparison === constant time
  if (n < 2 || n % 1 !== 0) {
    // O(1) - return === constant time
    return false;
  }
  // O(n) - iterating through nums 
  // will depend on the value of the num
  for (let i = 2; i < n; ++i) {
    // O(1) - comparison && return both === constant time
    if (n % i === 0) return false;
  }
  // O(1) - return === constant time
  return true;
}