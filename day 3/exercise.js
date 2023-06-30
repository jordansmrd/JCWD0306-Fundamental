// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10

let number = 9;

for (let i = 1; i <= number; i++) {
 console.log(`${number} x ${i}`);
}
// Write a code to check whether a string is a palindrome or not.
//palindrome adalah sebuah kata dibalik dan memiliki arti yang sama

let word = 'ayam';
// console.log(word.split('').reverse().toString().replace(/,/g, ''));
let reverse = '';
for (let i = word.length; i >= 0; i--) {
 reverse += word.charAt(i);
}

console.log(reverse);
console.log(reverse == word ? 'palindrome' : 'not palindrome');
// Write a code to convert centimeter to kilometer.
number = 1;
console.log(`${number} cm = ${number / 100} m`);

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
number = 10000;
// console.log(number.toLocaleString().replace(/,/g, '.'));
// console.log(number.toLocaleString().split(',').join('.'));

// let strNumber = number.toLocaleString('id-ID') + ',00';
console.log(`Rp. ${number.toLocaleString('id-ID') + ',00'}`);

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”

word = 'Hello world';
let search = 'ell';

console.log(word.replace(search, ''));
// console.log(word.replace(/ell/, ''));
// console.log(word.replace(new RegExp(search, 'g'), ''));

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”

word = 'hello world kebakaran';
let capitalize = '';
for (let i = 0; i < word.length; i++) {
 if (i == 0 || word[i - 1] == ' ') {
  capitalize += word.charAt(i).toUpperCase();
 } else {
  capitalize += word.charAt(i);
 }
 //hello world
 //h => H
 // w => W
 //hello world => cari spasi sebelum huruf yg sedang diloop
}

console.log(capitalize);

// Write a code to reverse a string.
word = 'ayam';
// console.log(word.split('').reverse().toString().replace(/,/g, ''));
reverse = '';
for (let i = word.length; i >= 0; i--) {
 reverse += word.charAt(i);
}
console.log(reverse);

// Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

word = 'The QuiCk BrOwN Fox';
let newWord = '';
for (let i = 0; i < word.length; i++) {
 newWord +=
  word.charAt(i) == word.charAt(i).toUpperCase()
   ? word.charAt(i).toLowerCase()
   : word.charAt(i).toUpperCase();
}

console.log(newWord);

// Write a code to find the largest of two given integers
let number1 = 15;
let number2 = 25;
console.log(`largest number is ${number1 > number2 ? number1 : number2}`);

// Write a conditional statement to sort three numbers
number1 = 2;
number2 = 500;
let number3 = 100;
let tmp = 0;

if (number1 > number2) {
 tmp = number1;
 number1 = number2;
 number2 = tmp;
}
if (number1 > number3) {
 tmp = number1;
 number1 = number3;
 number3 = tmp;
}

if (number2 > number3) {
 tmp = number2; // 500
 number2 = number3; // number2 = 100
 number3 = tmp;
}
// console.log(number1 + " " +  number2 + " " + number3);

console.log(number1, number2, number3);
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
let input = true;
console.log(typeof input == 'string' ? 1 : typeof input == 'number' ? 2 : 3);

// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
word = 'An apple a day keeps the doctor away';
console.log(word.replace(/a/gi, '*'));

// ******
// ******
// ******
// ******

number = 5;
let star = '';

for (let i = 0; i < number; i++) {
 star = '';

 for (let j = 0; j < number; j++) {
  star += '*';
 }
 console.log(star);
}

//  *
//  **
//  ***
//  ****
console.log();

for (let i = 0; i < number; i++) {
 star = '';
 for (let j = 0; j <= i; j++) {
  star += '*';
 }
 console.log(star);
}

//  ****
//   ***
//    **
//     *

console.log();

for (let i = 0; i < number; i++) {
 star = '';

 for (let j = 0; j < number; j++) {
  if (j < i) star += ' ';
  else star += '*';
 }

 console.log(star);
}

//     *
//    **
//   ***
//  ****

console.log();

for (let i = 0; i < number; i++) {
 star = '';
 for (let j = 0; j <= number; j++) {
  if (j < number - i) star += ' ';
  else star += '*';
 }

 console.log(star);
}

//  ****
//  ***
//  **
//  *

console.log();

for (let i = 0; i < number; i++) {
 star = '';
 for (let j = 0; j < number - i; j++) {
  star += '*';
 }

 console.log(star);
}

//      *
//     * *
//    * * *
//   * * * *

for (let i = 0; i < number; i++) {
 star = '';
 for (let j = 0; j < number; j++) {
  if (number - i > j) star += ' ';
  else star += '* ';
 }

 console.log(star);
}
