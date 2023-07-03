//function declaration
//square merupakan nama function
//number merupakan parameter
// return adalah hasil dari fungsi square dan sebagai tanda berakhirnya task dalam function

function square(number) {
 return number * number; //16
}

function square2(number) {
 console.log(number * number);
}

function square3(number) {
 return number * number;
 return number * number;
 console.log(number * 30000);
}

function square4(number) {
 if (number % 2 == 0) return number * 1000;

 return number * number;
}

const luas = square2(4);
console.log(luas);

//function expression

const rectangle = function (p, l) {
 return p * l;
};

const greetings = function (location) {
 let welcome = 'welcome to purwadhika';
 console.log(welcome, location);
};

//variable di dalam function hanya bisa digunakan di dalam function itu sendiri
//function merupakan code javascript yang sifatnya reuseable
//terdapat function declaration dan function expression
//parameter merupakan sebuah variable di dalam function yang bisa diassign lewat argument
console.log(greetings('batam')); //undefined

const panggil = function (name = 'ridwan', gender = 'cowo') {
 console.log('nama saya', name, 'jenis kelamin saya', gender);
};

panggil('enos');
panggil('nicola', 'cewe');

let a;
let b;
let manyMoreArg = [];
function myFunc(a, b, ...manyMoreArg) {
 console.log('a', a); //string
 console.log('b', b); //string
 for (let arg of manyMoreArg) console.log(arg);
 console.log('manyMoreArg', manyMoreArg); //array of string
}

myFunc('one', 'two', 'three', 'four');

//callback function vs normal function expression
let cb = function (msg) {
 console.log(msg);
};
cb = (msg) => {
 console.log(msg);
};

cb('hello bro');

let multi1 = (number1, number2) => {
 let hasil = number1 * number2;
 return hasil;
};

console.log(multi1(3, 4));
//arrow => single statement dan return hasil statement tanpa perlu tulis return
let multi2 = (number1, number2) => number1 * number2;
console.log(multi2(5, 3));

//nested => function di dalam function
let sayHello = () => {
 function say() {
  return 'say';
 }

 function hello() {
  return 'hello';
 }
 return say() + ' ' + hello();
};

console.log(sayHello());

//closure => inner function dapat mengakses variable/parameter dari function di luarnya

const greeting = (name) => {
 const defaultMsg = 'Hello ';

 return function () {
  return defaultMsg + name;
 };
};

let call = greeting('udin'); // karena hasil return merupakan sebuah function, variable call menjadi function
console.log(call());

//currying => sama seperti closure tetapi inner function memiliki parameter
function multiplier(factor) {
 return function (number) {
  return number * factor;
 };
}
console.log(multiplier(8)(5));

const multi = multiplier(8);
console.log(multi(5));

//recursive => sebuah function yang memanggil dirinya sendiri
//recursive dapat diartikan juga sebagai looping

function countDown(fromNumber) {
 console.log(fromNumber); //5 4 3 2 1

 let nextNumber = fromNumber - 1; //4 3 2 1 0
 if (nextNumber > 0) {
  countDown(nextNumber); //countDown(4) countDown(3) countDown(2) countDown(1)
 }
}

countDown(5);
