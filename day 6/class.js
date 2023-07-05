//class declaration
class User {
 name = 'udin';

 constructor(name) {
  //constructor merupakan sebuah method yang dipanggil pada saat class dipanggil
  this.name = name; // re-assign value di dalam key name sesuai dengan value dari parameter
 }

 greeting() {
  console.log('hello world');
 }
}

//class expression
const User2 = class {
 greeting() {
  console.log('hello world');
 }
};

//class merupakan cetakan untuk membuat suatu object
//cetakan disini sifatnya ditentukan dari properties/methods yang ada di dalam class

const user = new User('ridwan'); //menciptakan object berdasarkan class User
user.greeting(); //greeting merupakan function dari class User. yang telah menjadi method di dalam object user
console.log(user.name);

//buat class untuk student => name,age,hobby
class Student {
 // private
 #address; // ini merupakan private key yang hanya bisa diakses di dalam class saja

 constructor(nama, umur, hobi, alamat) {
  this.name = nama;
  this.age = umur;
  this.hobby = hobi;
  this.#address = alamat;
 }

 #sayHello() {
  console.log(`hello alamat saya ada di ${this.#address}`); // bisa diakses di sini
 }
 sayHello2() {
  this.#sayHello();
 }
}

const student1 = new Student('udin', 99, 'makan', 'batam'); //external
const student2 = new Student('deni', 21, 'tidur');
const student3 = new Student('arif', 18, 'push rank');

student3.hello = () => {
 console.log('hehehe');
};

console.log(student3);

// console.log(student1.name, student2.name, student3.name);
console.log(student1.address); //tidak bisa diakses dari luar
student1.sayHello2();

class DB {
 static #connection = ''; //variable connection

 static #initializeConnection() {
  //function yang betugas assign connection value lewat random number
  const randomNumber = Math.ceil(Math.random() * 100);
  DB.#connection = `New Database Connection ${randomNumber}`;
 }

 static getConnection() {
  //function ngecek apabila connection kosong maka akan memanggil function initializeConnection
  if (!DB.#connection) {
   DB.#initializeConnection();
  }

  return DB.#connection; //return hasil connection yang disudah di-assign
 }
}

let db = new DB();
console.log(db);

console.log(DB.getConnection());
//static membuat key di dalam class dapat dipanggil walaupun class belum menjadi sebuah object
//object hasil dari class yg memiliki key static . tidak akan memiliki key static juga

let newArr = new Array();
Array.apply; // hasil dari static key
newArr; //hasil dari yang bukan static key

let user2 = {
 firstName: 'udin',
 lastName: 'ujang',
 get fullName() {
  return `${this.firstName} ${this.lastName}`;
 },
 set fullName(values) {
  //values = "ayam goreng"
  // split = ["ayam", "goreng"]
  let split = values.split(' ');
  this.firstName = split[0]; //ayam
  this.lastName = split[1]; //goreng
 }
 //get membuat function fullname diakses layaknya sebuah property
};

user2.firstName = 'udun';
user2.fullName = 'ayam goreng'; //tidak berhasil re-assign karena fullname bukanlah property
console.log(user2.fullName); //cara memanggil get fullName

console.log(user2.firstName);
console.log(user2.lastName);

class User3 {
 #firstName = 'udin';
 #lastName = 'ujang';

 get fullName() {
  return `${this.#firstName} ${this.#lastName}`;
 }

 set fullName(values) {
  let split = values.split(' ');
  if (split.length != 2) return console.log('values tidak sesuai');
  this.#firstName = split[0];
  this.#lastName = split[1];
 }
}

const user3 = new User3();

console.log(user3.fullName);
user3.fullName = 'hehe hehe';
console.log(user3.fullName);

//inheritence = warisan
//class akan mewariskan keys ke dalam class turunannya

//produk
class Product {
 constructor(productName, price) {
  this.productName = productName;
  this.price = price;
 }
}

class Book extends Product {
 constructor(productName, price, author) {
  //function pertama kali
  super(productName, price); //menjalankan constructor miliki product
  this.author = author;
 }
}

const produk1 = new Product('kulkas', 2000000);
const produk2 = new Product('AC', 500000);
const produk3 = new Product('buku harry potter', 50000);
produk3.author = 'JK ROWLING';
const produk4 = new Product('buku naruto', 30000);
produk4.author = 'masashi kisimoto';
const produk5 = new Book('buku IPS', 50000, 'andre');

console.log(produk1, produk2, produk3, produk5);
