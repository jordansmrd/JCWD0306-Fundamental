// Write a function to get the lowest,
//highest and average value in the array (with and without sort function).

// avg = sum data / total data
// number = [1,2,3,4,100]
// number = [1,100,2,3,4]
//number = [1,2,3,4,100]
// a = 2
//b = 1
//data ada 5
// length = 5
// index terakhir adalah 4 => length-1

const LHA = (numbers) => {
 numbers.sort((a, b) => a - b);
 // (a, b) => a - b is an arrow function that compares two numbers a and b.
 // Inside the arrow function, a - b is used as the comparison logic. This expression subtracts b from a.
 // If the result is negative (a < b), it means a should come before b in the sorted array.
 // If the result is positive (a > b), it means a should come after b in the sorted array.
 // If the result is zero (a === b), it means a and b are equal, and their relative order will be determined by other factors or their original position in the array.

 console.log('min', numbers[0]);
 console.log('max', numbers[numbers.length - 1]);
 console.log(
  'avg',
  numbers.reduce((sum, curr) => (sum += curr)) / numbers.length
 );
};
LHA([1, 2, 3, 4, 500, 6, 7, 100]);

const LHA2 = (numbers) => {
 // [1, 2, 3, 4, 6, 7, 100, 500
 // 500 > 6
 //5 => 6
 for (let i = 0; i < numbers.length; i++) {
  for (let j = 1 + i; j < numbers.length; j++) {
   if (numbers[i] > numbers[j]) {
    let tmp = numbers[i]; //500
    numbers[i] = numbers[j]; // 100
    numbers[j] = tmp; //500
   }
  }
 }
 console.log('min', numbers[0]);
 console.log('max', numbers[numbers.length - 1]);
 console.log(
  'avg',
  numbers.reduce((sum, curr) => (sum += curr)) / numbers.length
 );
};
LHA2([1, 2, 3, 4, 500, 6, 7, 100]);

const LHA3 = (numbers) => {
 console.log('min', Math.min(numbers)); //1
 console.log('max', Math.max(numbers)); //500
 console.log(
  'avg',
  numbers.reduce((sum, curr) => (sum += curr)) / numbers.length
 );
};
LHA2([1, 2, 3, 4, 500, 6, 7, 100]);

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
//[1,2,3,4] => 1, 2, 3 and 4
const toString = (arr) => {
 let str = ''; //1, 2, 3, 4 and 5
 arr.map((val, idx) => {
  if (!idx) str += val; // 1
  else if (idx == arr.length - 1) str += ' and ' + val;
  else str += ', ' + val;
 });

 console.log(str);
};

toString([1, 2, 3, 4, 5]);

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

const convert = (str) => str.split(' ');

console.log(convert('hello world'));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const sumArr = (arr1, arr2) => arr1.map((val, idx) => arr1[idx] + arr2[idx]); // 4,4,4
console.log(sumArr([1, 2, 3], [3, 2, 1]));

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

const push = (arr, element) => {
 arr.indexOf(element) == -1 ? arr.push(element) : null;
 return arr;
};
console.log(push([1, 2, 3, 4], 5));

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
const evenOnly = (numbers) => numbers.filter((number) => !(number % 2));
console.log(evenOnly([1, 2, 3, 4, 5, 6, 7, 8]));

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input.
//(if the maximum size of the given input is 5 than the array can only contain 5 elements).
// Example: maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6, 7]
const insertArray = (length, ...elements) => {
 elements.length = length;
 return elements;
};
//

console.log(insertArray(5, 5, 10, 24, 3, 6, 7, 8));
//5, 10

// Write a function that will combine 2 given array into one array
const combineArr = (arr1, arr2) => arr1.concat(arr2);
console.log(combineArr([1, 2], [3, 4]));

// Write a function to find duplicate values in an array
const findDuplicate = (arr) => [
 ...new Set(arr.sort().filter((val, idx) => val == arr[idx + 1]))
];

console.log(findDuplicate([1, 2, 3, 4, 1, 1])); // 1 1 2 3 => 1 2 3

// Write a function to find the difference in 2 given array
const findDiff = (arr) =>
 arr.sort().filter((val, idx) => val != arr[idx + 1] && val != arr[idx - 1]);

console.log(findDiff([1, 2, 3, 4, 4, 2, 3, 1, 1, 1, 1, 1, 7, 8, 9, 9, 9, 9]));

// let arr = [1, 'string', null, false, undefined, 2, 'yes', undefined];
// Based on the array above write a function that will return primitive data types only

const primitive = (arr) => arr.filter((val) => typeof val != 'object');
console.log(
 primitive([1, 2, 3, 4, 'a', 'b', '$', null, undefined, {}, [1, 2, 3]])
);

// Write a function from a given array of numbers and return the second smallest number
const secondSmallest = (arr) =>
 arr.sort((a, b) => a - b).length > 1 ? arr[1] : arr[0];

console.log(secondSmallest([7, 8, 3, 21, 2, 3, 5]));
// Write a function from a given array of mixed data types and return the sum of all the number

const sum = (arr) => arr.reduce((sum, curr) => (sum += curr), 0);
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8]));

// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// Write a function from the above array of number that will return sum of duplicate values
const sumDuplicate = (arr) =>
 arr
  .sort()
  .filter((val, idx) => val == arr[idx + 1] || val == arr[idx - 1])
  .reduce((sum, curr) => (sum += curr), 0);
console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10])); // 10 10 10 10 20 ...

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

const rps = (arg = '') => {
 arg = arg.toLowerCase();
 let choices = ['rock', 'paper', 'scissor'];
 const bot = Math.floor(Math.random() * 3); // 0 1 2
 if (choices.indexOf(arg) == -1) return 'choose rock/paper/scissor';
 else arg = choices.indexOf(arg); //1
 //kertas vs gunting => gunting
 //gunting vs batu => batu
 //kertas vs batu => kertas
 console.log('you choose ' + choices[arg]);
 console.log('bot chooses ' + choices[bot]);
 if (arg == bot) return 'draw';
 else if (
  (arg == 0 && bot == 2) ||
  (arg == 1 && bot == 0) ||
  (arg == 2 && bot == 1)
 )
  return 'you win';
 else return 'you lose';
};

console.log(rps('paper'));
