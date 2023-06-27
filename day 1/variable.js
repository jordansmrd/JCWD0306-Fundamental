let message; // cara deklarasi javsascript
message = 'Hello'; // assign variable

let message2 = 'Hello 2'; //declare + assign
message2 = 'Hello 3'; //re-assign

var globalVariable = 'Hello World'; //declare
//re-declare
//re-assign

var globalVariable = 'hello wurld'; //re-declare
globalVariable = 'hello hello'; // re-assign

let replaceable = 'this value will be replaced'; //declare +assign
replaceable = 'ini udah berubah'; //re-assign
//let tidak bisa re-declare

const constant = 'Hello purwadhika';
//tidak bisa re-assign
//tidak redeclare

console.log(globalVariable);
console.log(replaceable);
console.log(constant);

// variable naming
let huruf = 'a'; //letters
let huruf2 = 'b'; // letters + digit
let huruf2_ = 'bb'; // digit + symbol _
let huruf$ = 'aa'; //symbol $
let $huruf = 'aaa'; //symbol $
let _huruf = 'aaaa'; //symbol _
let Huruf = 'b'; // case-sens
let HuruF = 'c'; // case-sens
console.log(huruf);
console.log(huruf2);

// let var; reserved words

let number = 3.14;
console.log(typeof number); //number
number = 'number';
console.log(typeof number); //string
let bool = true;
bool = false;
console.log(typeof bool); //boolean

let name = null; // represent sebuah value yang tidak hadir

let alamat;
console.log(alamat);

let int = 123456789012345n;
console.log(typeof int);

//immutable
let contoh1 = 'abc';
let contoh2 = contoh1;
console.log(contoh1);
console.log(contoh2);
contoh2 = 'agus';
console.log(contoh2);

//mutable
let person = {
 name: 'udin',
 age: 26
};

let newPerson = person;

console.log(person);
console.log(newPerson);
newPerson.name = 'abc';
console.log(person);

// shallow copy => bersifat independent
// deep copy => bersifat reference
