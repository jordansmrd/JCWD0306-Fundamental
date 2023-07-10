let arr = [10, 14, 12, 13, 11]; //declare
console.log(arr);
console.log(
 ' ini findIndex',
 arr.findIndex((val, index) => val == 11)
); //if true return index

arr.push(1); //menambahkan ke index terakhir => [1] => [10,11,12,13,1]
arr.pop(); //hapus element/index terakhir dari array =>[10,11,12,13]
arr.shift(); //hapus element/index paling depan dari array => [11,12,13]
arr.unshift(2); //menambahkan ke index paling depan = > [2,11,12,13]
console.log(arr); //[2,11,12,13]
let join = arr.join(' '); //kebalikan split. mengubah array jadi string. separator diganti dengan parameter
console.log(join); // '2 11 12 13' => '2 11 12 13 11'
console.log(arr.indexOf(11)); //sama dengan string => return 1
console.log(arr.lastIndexOf(11)); //sama dengan string => return 4
console.log(
 'ini findIndex',
 arr.findIndex((val, index) => val == 100)
); //if true return index (number)
console.log(
 'ini find',
 arr.find((val) => val == 100)
); //if true return value (element)
console.log(arr.filter((val) => val == 11 || val == 12)); //if true return array[value]
() =>
 //arrow
 () => {
  console.log('asd');
  return 100;
 }; //cb

function a(arg) {
 return arg;
}

a(() => 0);

arr = [1, 2, 3, 4, 5];
arr.map((value, index) => {
 console.log(value); //1 , 2
 console.log(index); //0 , 1
});

arr = [
 {
  name: 'udin',
  age: 20
 },
 {
  name: 'jamal',
  age: 19
 },
 {
  name: 'ujang',
  age: 19
 }
];

for (let i = 0; i < arr.length; i++) {
 if (arr[i].age == 19) console.log('umur 19');
}

arr.map((value) => {
 if (value.age == 19) console.log('umur 19');
});

for (let i = 0; i < arr.length; i++) {
 if (i % 2 == 0) console.log('bilangan genap');
}
arr.map((value, index) => {
 if (index % 2 == 0) console.log('bilangan genap');
});

arr.map((value, index) =>
 index % 2 == 0 ? console.log('bilangan genap') : null
);

arr.length; //panjang array
console.log(arr.map((val, index) => (val == 11 ? 'siap' : 'salah'))); //looping array arr

console.log(arr.reduce((prev, current, index) => prev + current));
//prev = value dari index 0
//current = value dar index 1 sampai seterusnya

//[1,2,3,4,5] => sum jadi ? 15

let arrNum = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < arrNum.length; i++) {
 sum += arrNum[i];
} //sum menggunakan for loop
console.log(sum);

sum = 0;
let i = 0;
while (i < arrNum.length) {
 sum += arrNum[i];
 i++;
} //sum menggunakan while loop
console.log(sum);

sum = 0;
arrNum.map((val) => (sum += val));
console.log(sum);
sum = 0;
console.log(arrNum.map((val) => (sum += val))[arrNum.length - 1]); // cara menggunakan map tapi maksa

console.log(arrNum.reduce((prev, curr) => prev + curr)); // sum menggunakan reduce

// buat sebuah program untuk belanja
// add to cart => push. apabila produk sudah ada maka tambah qty aja
// remove item from cart =>

//tomat,indomie,bayam
//
