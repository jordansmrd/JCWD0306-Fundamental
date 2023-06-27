console.log('apa aja ');

let variable = 'hello world';

console.log(variable.length); //menampilkan total char dalam string
console.log(variable.slice(1, 5));

['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
// brp panjang index ini ? 11
// start index dari 0
// end index dari 10
console.log(variable.substring(1, 5));
console.log(variable.replace(/l/g, '2'));
console.log(variable.replace('l', '2'));

console.log(variable.toUpperCase());
console.log('HEHEHE'.toLowerCase());

console.log(variable.indexOf('l'));

let name = 'udin';

let message = name + ' sedang mancing \n ikan';
let message2 = `${name} sedang makanikan`;

console.log(message);
console.log(message2);

let number = 123.2323232;

console.log(number.toFixed(2));

console.log(typeof String(123));

console.log('9' * 'a');

console.log(typeof Number('3.14'));

//boolean
console.log(Boolean(1));
console.log(Boolean(-1));

console.log(Boolean(' '));

const date = new Date();
console.log(date);
// ('YYYY-MM-DD');

const date2 = new Date('2012-12-12');
console.log(date2.getTime());
// ms => s 1000
// s => 60
// m => h 60
// h =>d 24

const datePlus1 = new Date(new Date().getTime() + 24 * 3600 * 1000);
console.log(datePlus1);
console.log(1 + 1); // jumlah
console.log(5 - 2); //pengurangan
console.log(5 * 5); //perkalian
console.log(100 / 5); //pembagian
console.log(10 % 3); // modulus
console.log(5 ** 2); //pemangkatan

let x = 1;
x = -x; //unary 1 operator 1 number

console.log(x);

let a = 2,
 b = 3;

console.log(a + b); //binary 1 operator 2 number

let string1 = 'makan';
let string2 = 'nasi';

console.log(string1 + ' ' + string2);

let string3 = 'makan';
let string4 = 1;

console.log(string3 + ' ' + string4);

console.log(typeof (3 + 3));

let n = 2;
n += 3;

console.log(n);

let counter = 2;
// counter++; // increment
//counter = counter + 1
// counter--; //decrement
// console.log(counter);
let counter2 = 2;
console.log(counter++); // postfix ditampilakan baru dihitung
console.log(++counter); //prefix dihitung baru ditampilkan

// hitung luas persegi panjang
//rumus persegi panjang adalah P X L
//membutuhkan 2 buah angka untuk P dan L
//kalikan P dan L untuk mendapatkan luas

let P = 10;
let L = 5;
console.log(`luas persegi panjang ${P}cm dan lebar ${L}cm adalah ${P * L}cm`);
