'use strict';
/**
 * 1. COUNTING SHEEP
 * Big-O: O(n) - This function recursively calls while
 * decrementing by 1 for each repetition, so it's
 * directly proportional to the size of the number input.
 */

function countSheep(num){
  //stopping condition of base case
  if(num === 0){
    console.log('All sheep jumped over the fence');
  } 
  //this is the recursive case
  else{
    console.log(`${num}: Another sheep jump over the fence`);
    countSheep(num-1);
  }
}

/**
 * 2. ARRAY DOUBLE
 * Big-O: O(n) - This function pulls off the first element
 * of the array before calling itself again, so it's
 * directly proportional to the size of the array passed in.
 */
function double_all(arr) {
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

/**
 * 3. REVERSE STRING
 * Big-O: O(n) - This function pulls off the first char
 * of the string before calling itself again, so it's
 * directly proportional to the length of the string.
 */

function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

/**
 * 4. TRIANGULAR NUMBER
 * Big-O: O(n) - this function decrements down
 * by 1 as it makes the recursive calls, so it's
 * directly proportional to the value of the
 * number passed in.
 */

//Should always return n*(n+1)/2
function triangle(n) {
  if (n < 2) 
    return n;
  return n + triangle(n - 1);
}

/**
 * 5. STRING SPLITTER
 * Big-O: O(n) - function calls itself once per recursion,
 * but the number of recursions is based upon the `sep` passed in
 * and not the length of the `str`. Still qualifies as O(n)
 * because it's directly proportional to the input.
 */

function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx === -1) 
    return [str];
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
}

/**
 * 6. BINARY REPRESENTATION
 * Big-O: O(log n) - number of recursions is based on
 * halving the argument for each cycle.
 */

function convertToBinary(num){
  if(num>0){
    let binary = Math.floor(num%2); //save the reminder in binary
    //divide the number by 2 and send that to the function again
    //carry the reminder to the next recursion call
    return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
    return ''; //base case - at some point the divisions will lead to 0
  }
}

/**
 * 7. FACTORIAL
 * Big-O: O(n) - function decrements by one on each call
 * and will be directly proportional to the input
 */

function factorial(n) {  
  // base case
  if (n === 0) {
    return 1;
  }
  // recursive case
  return n * factorial(n - 1);
}

/**
 * 8. FIBONACCI
 * Big-O: O(2^n) - each iteration decrements and
 * calls itself twice, so it's an exponential growth
 */

function fibonacci(n) {
// Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

/**
 * 9. ANAGRAMS
 * Big-O: O(n!) - the number of possible combinations
 * for this problem is N!, and the function grows
 * by that much for each extra letter added
 */

function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1); 
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

/**
 * 10. ANIMAL HIERARCHY
 * Big-O: O(n) - there's a recursive function inside of
 * a loop, but (due to the `.filter`) the call is
 * only run on each item in the input once, so it's
 * directly related to the size of the input array
 */

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}


/*=================================================================================*/
/*
Exercise 11: Organization Chart
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the hierarchy.
*/

let organization = {
  'Zuckerberg': {
    'Schroepfer': {
      'Bosworth': {
        'Steve': {},
        'Kyle': {},
        'Andra': {}
      },
      'Zhao': {
        'Richie': {},
        'Sofia': {},
        'Jen': {}
      },
      'Badros': {
        'John': {},
        'Mike': {},
        'Pat': {}
      },
      'Parikh': {
        'Zach': {},
        'Ryan': {},
        'Tes': {}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina': {},
        'Michelle': {},
        'Josh': {}
      },
      'Swain': {
        'Blanch': {},
        'Tom': {},
        'Joe': {}
      },
      'Frankovsky': {
        'Jasee': {},
        'Brian': {},
        'Margaret': {}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie': {},
        'Julie': {},
        'Annie': {}
      },
      'Hernandez': {
        'Rowi': {},
        'Inga': {},
        'Morgan': {}
      },
      'Moissinac': {
        'Amy': {},
        'Chuck': {},
        'Vinni': {}
      },
      'Kelley': {
        'Eric': {},
        'Ana': {},
        'Wes': {}
      }
    }}};

function traverseA(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1);
  });
}

function traverseB(node, indent=0) {
  for (var key in node) {
    console.log(' '.repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}




function main(){
//console.log('#1 - count sheep');
//countSheep(5);

//console.log('#2 - Array Doubler');
//let arr = [10,5,3,4];
//console.log(double_all(arr));

//console.log('#3 - Reverse String');
//console.log(reverseString("tauhida"));

//console.log('#4 - nth Triangular Number');
//console.log(triangle(5));

//console.log('#5 - String Splitter');
//console.log(split('1/21/2018', '/'));

//console.log('#6 - Binary Representation');
//console.log(convertToBinary(25));

//console.log('#7 - Anagrams');
//printAnagram("east");

//console.log('#8 - animalHierarchy');
//console.log(traverse(animalHierarchy, null));

//console.log('#9 - Factorial');
//console.log(factorial(5)); //120

/*
console.log('#10 - Fibonacci Sequence');
const fib = 7;
for(let i=1; i<=fib; i++){
  console.log(fibonacci(i));
}
console.log('#10 - Fibonacci total');
console.log(fibonacci(fib));
*/

//console.log('#11 - Organization Chart');
//console.log(traverseA(organization));
//console.log(traverseB(organization));

}
main();
