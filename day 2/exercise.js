// menghitung biaya parkir
// kendaraan = mobil/motor
// 1 jam pertama mobil = 3000 => 2000
// 1 jam pertama motor = 2000 => 1000

// motor , 3 jam , total 4000

let kendaraan = 'mobil';
let totaljam = 2;
let jamPertama = totaljam > 0 ? 1 : 0;
let jamSisa = totaljam > 0 ? totaljam - 1 : 0;
let biaya = 0;
if (kendaraan == 'mobil') {
 jamPertama = jamPertama * 3000;
 jamSisa = jamSisa * 2000;
} else {
 jamPertama = jamPertama * 2000;
 jamSisa = jamSisa * 1000;
}
biaya = jamPertama + jamSisa;
console.log(`biaya parkir ${kendaraan} untuk ${totaljam} jam adalah ${biaya}`);

kendaraan = 'motor';
totaljam = 5;
biaya = 0;
switch (kendaraan) {
 case 'mobil':
  for (let jam = 1; jam <= totaljam; jam++) {
   if (jam == 1) {
    biaya += 3000;
    continue;
   }
   biaya += 2000;
  }
  break;
 case 'motor':
  for (let jam = 1; jam <= totaljam; jam++) {
   if (jam == 1) {
    biaya += 2000;
    continue;
   }
   biaya += 1000;
  }
  break;
}

console.log(`biaya parkir ${kendaraan} untuk ${totaljam} jam adalah ${biaya}`);

// Write a code to convert celsius to fahrenheit.
let c = 100;
let f = c * 1.8 + 32;
console.log(`${c}°C equals to ${f}°F `);

// Write a code to check whether the number is odd or even
let number = 11;
let check = 'ganjil';
if (number % 2 == 0) check = 'genap';
console.log(`angka ${number} adalah bilangan ${check}`);

// Write a code to check whether the number is prime number or not
number = 15;
check = 'bilangan prima';
if (number > 1) {
 for (let i = 2; i <= number / 2; ++i) {
  // i = 2
  // 7.5
  // 15 % 2  == 0 ? false
  // 15 % 3  == 0 ? false
  // 15 % 4  == 0 ? false
  // 15 % 5  == 0 ? true

  //6 % 2 == 0 ? true

  //
  if (number % i == 0) {
   check = 'bukan bilangan prima';
   break;
  }
 }
}

console.log(`angka ${number} adalah ${check}`);

// Write a code to find the sum of the numbers 1 to N.
// Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

number = 5;
let hasil = `${number} → `;
let result = 0;
for (let i = 1; i <= number; i++) {
 result += i;
 if (i == number) {
  hasil += number;
  continue;
 }
 hasil += `${i} + `;
}

console.log(hasil + ' = ' + result);

// Write a code to find factorial of a number.
// n = n x (n-1) ( n-2) (n-3)...
// 5 = 5 x 4 x 3 x 2 x 1
number = 5;
hasil = `${number} → `;
let factorial = 1;

for (number; number >= 1; number--) {
 factorial *= number;
 if (number == 1) {
  hasil += number;
  continue;
 }
 hasil += `${number} x `;
}
console.log(hasil, '=', factorial);

// Write a code to print the first N fibonacci numbers.
// 1,1,2,3,5,8,13,....
// bilangan yg didapat dari hasil penjumlahan bilangan sebelumnya
// 5 number(s) of fibonnaci :  0, 1, 1, 2, 3

number = 5;
let temp1 = 0,
 temp2 = 1,
 temp3 = 0; // temp3 digunakan untuk menyimpan hasil sementara dari 2 bilangan sebelumnya

text = `${number} number(s) of fibonnaci :  ${temp1}, ${temp2}`;
for (let i = 2; i < number; ++i) {
 temp3 = temp1 + temp2;
 text += `, ${temp3}`; //1 2 3 5
 temp1 = temp2; // 1 1 2 3
 temp2 = temp3; // 1 2 3 5
}

console.log(text);
