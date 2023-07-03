//array of string
let arr = ['a', 'b', 'c', 'd', 'e']; // cara pertama declare sebuah array
let arr2 = new Array('a', 'b', 'c', 'd', 'e'); // cara kedua declare sebuah array

console.log(arr);
console.log(arr2);

//array of number
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrNumber);

//angka 1 merupkan value yang terdapat di dalam array
//lokasi angka 1 di dalam arrNumber berada pada index pertama atau index 0

console.log(arrNumber[0], 'merupakan value dari arrNumber index ke 0'); // memanggil index ke 0
console.log(arrNumber[1], arrNumber[2]);

//object
let ridwan = {
 name: 'ridwan',
 email: 'ridwan@mail.com',
 age: 17,
 gender: 'male',
 hobby: ['traveling', 'push rank']
};
let deni = {
 name: 'deni',
 email: 'deni@mail.com',
 age: 20,
 gender: 'male',
 hobby: ['tidur', 'main game']
};

let students = [ridwan, deni]; // array of object
console.log(students);

let fruits = ['Apple', 'Orange', 'Plum'];
//length = 3

//looping array for
for (let i = 0; i < fruits.length; i++) {
 console.log(fruits[i]); // Apple, Orange , Plum
}

//looping array dengan for of
//looping sebanyak length secara otomatis
// variable fruit merupakan value dari nilai per index
for (let fruit of fruits) {
 console.log(fruit);
}

//looping array dengan for in
//looping sebanyak length secara otomatis
// variable index merupakan index dari array yg dilooping
for (let index in fruits) console.log(fruits[index]);

//coba looping a-z
// let alphabets = ['a', 'b', 'c'];
let alpabeths = 'abcdefghijklmnopqrstuvwxyz'.split(''); // buat sebuah string => split => merubah string menjadi array
for (let alpabeth of alpabeths) console.log(alpabeth);

let contoh = ['contoh1', 'contoh2'];
//toString => merubah array menjadi string
console.log(contoh.toString().replace(/,/g, ' '));

//join => merubah array jadi string dan kita bisa menentukan replacement pada separatornya
console.log(contoh.join(' '));

//pop => hapus element terakhir dari sebuah array
contoh.pop(); // kalo diconsole.log akan memberi tahu element apa yang dia hapus
console.log(contoh); // hanya muncul contoh1 karena contoh2 sudah dihapus lewat pop

//push => menambahkan element baru ke dalam sebuah array dan diletakan di akhir element
contoh.push('contoh3');
console.log(contoh);

//shift => hapus element pertama dari sebuah array
contoh.shift();
console.log(contoh);

//unshift => menambahkan element baru ke dalam sebuah array dan diletakan di awal element
contoh.unshift('contoh4');
console.log(contoh);

//concat => menggambungkan array dengan array lainnya, tanpa merubah origin array
let contoh2 = ['contoh5', 'contoh6'];
let contoh3 = contoh.concat(contoh2);
console.log(contoh3);

//splice => menghapus element dari array. 0 merupakan letak index, 2 merupakan total element yg dihapus
// merubah origin arraynya
contoh3.splice(0, 2);
console.log(contoh3);

//slice => mengambil porsi sebuah array. 1 merupakan start index, 3 index terakhir dari array
//slice akan berhenti sebelum sampai ke index 3
let contoh4 = contoh3.concat(contoh2);
console.log(contoh4);
console.log(contoh4.slice(1, 3));

//indexof => mencari lokasi index dari sebuah array melalui elementnya
console.log(contoh4); //[ 'contoh5', 'contoh6', 'contoh5', 'contoh6' ]
console.log('index', contoh4.indexOf('contoh6')); //index 0

//sort => mengurutkan sebuah array secara ASC
console.log(contoh4.sort());

//reverse => mengurutkan sebuah array mengurutkan secara DESC
console.log(contoh4.reverse());

//map => looping array
console.log(contoh4); //[ 'contoh6', 'contoh6', 'contoh5', 'contoh5' ]
// for (let cth of contoh4) console.log(cth);
//val adalah element di dalam array

contoh4.map((val, index) => console.log(val, index));
let isiMap = contoh4.map((val, index) => {
 val;
 return val;
});

// map return sebuah array
// isi arraynya tergantung dari hasil return callbackfunctionnya

console.log('hasil map', isiMap);

// hitung(5,3) => 5+3
//filter => menyaring isi array
//find => mencari element di dalam array
//reduce => menjumlahkan number dalam sebuah array

//buat sebuah array buah => strawberry, orange, apple, grape
let buah2an = ['strawberry', 'orange', 'apple', 'grape'];
// urutkan array buah asc
console.log('sort', buah2an.sort());
// urutkan desc array buah
console.log('reverse', buah2an.reverse());
// hapus strawberry
buah2an.shift();
console.log(buah2an);
// tambah durian, watermelon untuk menggantikan strawberry
buah2an.unshift('durian', 'watermelon');
console.log(buah2an);
// tambah tomato di sebelah grape
buah2an.splice(4, 0, 'tomato');
console.log(buah2an);
// tampilkan hasil array buah menggunakan for in dan for of
for (let buah of buah2an) console.log(buah);
for (let idx in buah2an) console.log(buah2an[idx]);
