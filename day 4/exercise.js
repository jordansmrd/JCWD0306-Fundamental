// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10
// Parameters : height → triangle height

const triangle = (h) => {
 let number = 1; // 2
 for (let i = 0; i < h; i++) {
  // 5 < 5
  let str = '';
  for (let j = 0; j <= i; j++) {
   //5 <= 4
   str += number > 9 ? number + ' ' : `0${number} `; //11 12 13 14 15
   number++; // 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
  }
  console.log(str);
  // 01
  // 02 03
  // 04 05 06
  // 07 08 09 10
  // 11 12 13 14 15
 }
};
triangle(5);

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping

const fizzBUzz = (numbers) => {
 let arr = []; //[1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz ]
 for (let i = 1; i <= numbers; i++) {
  // 1< 15

  //1 %3 == 1
  if (!(i % 3) && !(i % 5)) arr.push('fizzBuzz');
  //   if (i % 3 == 0 && i % 5 == 0) arr.push('fizzBuzz');
  else if (!(i % 3)) arr.push('fizz');
  else if (!(i % 5)) arr.push('buzz');
  else arr.push(i);
 }
 return console.log(arr.join(' '));
};

fizzBUzz(15);

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

const BMI = (w, h) => {
 let bmi = w / h ** 2;
 let msg;
 if (bmi < 18.5) msg = 'less weight';
 else if (bmi >= 18.5 && bmi <= 24.9) msg = 'ideal';
 else if (bmi >= 25 && bmi <= 29.9) msg = 'overweight';
 else if (bmi >= 30 && bmi <= 39.9) msg = 'very overweight';
 else msg = 'obesity';

 return console.log(msg);
};
BMI(75, 1.74);

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

const evenOnly = (numbers) => numbers.filter((number) => !(number % 2));
console.log(evenOnly([1, 2, 3, 4, 5, 6, 7, 8]));

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

const convert = (str) => str.split(' ');

console.log(convert('hello world'));
