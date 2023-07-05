//declare sebuah object
const car = {
 brand: 'BMW',
 model: 'M135I xDrive',
 price: 800000000
};
console.log(car);
//object merupakan sebuah variable yang menyimpan value di dalam key
//berbeda dengan array, values di dalam object tidak similar

console.log(typeof car);

//cara decalre object
let obj = {}; //declare literal object
let obj2 = new Object(); //declare object dengan constructor

let student = {
 name: 'ridwan', //property => value di dalam key yang miliki value
 say: () => {
  //method => value di dalam key yang berbentuk function
  console.log('hello');
 }
};

// student.

console.log(student.name); //menampilkan value dari key name
student.say(); // menjalan method dari key say

student.age = 17; //cara pertama menambahkan && assign key/property ke dalam obj student
student['hobby'] = 'mancing'; //cara kedua menambahkan & assign key/property ke dalam object student
//untuk cara kedua perhatikan penggunaan kurung siku dan masukan string di dalam kurung siku
console.log(student);

const arrKeys = ['name', 'age', 'address'];
const arrValues = ['ridwan', '17', 'batam'];
const person = {};

arrKeys.map((value, index) => {
 person[value] = arrValues[index];
 //value = "name" =>
 //person["name"] = arrValues[0] => person["name"] = "ridwan"
 //person["age"] = arrValues[1] => person["age"] = 17
 //person["address"] = arrValues[2] => person["address"] = "batam"
});

//method = merupakan fuction
// map = method
// map => looping sebanyak length dan return sebuah array

for (let i = 0; i < arrKeys.length; i++) {
 person[arrKeys[i]] = arrValues[i];
 arrKeys[i]; // baru dapet value
}

console.log(person);

//menghapus key di dalam sebuah object
delete person.address;
console.log(person);

const user = {
 email: 'udin@mail.com',
 name: 'udin',
 password: '12345678910'
};

if (user.email == 'udin@mail.com' && user.password == '12345678910') {
 //baru bisa login
 delete user.password;

 console.log(user);
}

const mobil = {
 name: 'nissan',
 model: 'rx-7',
 start: () => 'mobil menyala'
};
mobil.model = 'cefiro'; //replace value di dalam key model
mobil.start = 'hello';
console.log(mobil);

//mesin harusnya sebuah object => nama mesin, berat mesin, cylinder

console.log(mobil.mesin?.nama.depan);
//optional chaining => pada saat kita mengakses nested obj lewat sebuah key.
// apa bila key tersebut bukanlah sebuah tipe data yg kita expect maka tidak akan error

//accessing keys
console.log(Object.keys(mobil)); // return array of keys dari object mobil

//for in di dalam object untuk looping sebanyak key
for (let key in mobil) {
 console.log(`key ${key} = ${mobil[key]}`);
}

//

let a, b;
[a, b] = [10, 20];

console.log(a);
console.log(b);

let test = {
 a: 'abc'
};

let test2 = test; //deep copy
let test3 = { ...test }; //shallow copy
test2.a = 'cda';
console.log(test2);
console.log(test);
test3.a = '123';

console.log(test3);
console.log(test2);

let person2 = {
 name: 'udin',
 greet() {
  console.log(`hello ${this.name}`);
 },
 greet2: () => console.log(`hello ${this.name}`)
};

person2.greet(); //worked
person2.greet2(); // didnt work
