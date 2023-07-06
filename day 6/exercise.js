// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → Date
// Score → Number
// Parameters : array of student(arr of object)
// Return values :
// Object with this following properties :

// Score
// Highest
// Lowest
// Average

// Age
// Highest
// Lowest
// Average

class Student {
 constructor(name, email, age, score) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.score = score;
 }
}

class Calculate {
 constructor(arrNumber = []) {
  arrNumber = arrNumber.sort((a, b) => a - b); //diurutkan berdasarkan number
  //40,90,100
  this.highest = arrNumber[arrNumber.length - 1]; //100
  this.lowest = arrNumber[0]; // 40
  this.average = parseInt(
   arrNumber.reduce((sum, cur) => (sum += cur), 0) / //230
    arrNumber.length //3
  );
 }
}

const students = [
 new Student('sakura', 'sakura@mail.com', 17, 90),
 new Student('naruto', 'naruto@mail.com', 19, 40),
 new Student('sasuke', 'sasuke@mail.com', 18, 100)
];

const calculateStudents = (students = []) => {
 const score = new Calculate(students.map((student) => student.score));
 //map return = array of score [90,40,100]

 const age = new Calculate(students.map((student) => student.age));
 //map return = array of age [17,19,18]

 console.log('Score', { ...score });
 console.log('Age', { ...age });
};

calculateStudents(students);

// Create a program to create transaction

// Product Class
// Properties
// Name
// Price

// Transaction Class
// Properties
// Total
// Product // All product data, Qty => object
// Add to cart method → Add product to transaction
// Show total method → Show total current transaction
// Checkout method → Finalize transaction, return transaction data

class Product {
 constructor(name, price) {
  this.name = name;
  this.price = price;
 }
}

class TransactionProduct extends Product {
 constructor(name, price, qty) {
  super(name, price);
  this.qty = qty;
 }
}

class Transaction {
 #products = [];
 #total = 0;

 addToCart(name = '', price = 0, qty = 0) {
  const newProduct = new Product(name, price);
  //   const newProduct = new TransactionProduct(name, price, qty); cara kedua
  newProduct.qty = qty;

  this.#products.push(newProduct); // [{name : "sendal", price : "2000", qty : }]
  this.#total = this.#products.reduce(
   (sum, curr) => (sum += curr.price * curr.qty),
   0
  );
 }

 showTotal() {
  console.log('total : Rp ' + this.#total.toLocaleString('id-ID')); // Rp. 4.000
 }

 checkout(payment = 0) {
  if (payment < this.#total) return console.log('uang anda tidak cukup');
  this.#products.map((product) =>
   console.log(
    `product: ${product.name} qty: ${
     product.qty
    } price: Rp ${product.price.toLocaleString('id-ID')}`
   )
  );
  this.showTotal(); //   console.log('total : Rp ' + this.#total.toLocaleString('id-ID')); // Rp. 4.000

  console.log(
   `payment anda sebesar Rp ${payment.toLocaleString(
    'id-ID'
   )} \nkembalian anda adalah Rp ${(payment - this.#total).toLocaleString(
    'id-ID'
   )}`
  );
 }
}

const transaction = new Transaction();

transaction.addToCart('Addidas Yeezy', 4000000, 3); //12jt
transaction.addToCart('Air Jordan 1 BRED', 5000000, 2); //10jt
transaction.addToCart('Balenciaga Triple S', 15000000, 1); //15jt
transaction.addToCart('sedal jepit', 2000, 1); //2000

transaction.showTotal(); //total : Rp 37.000.000
transaction.checkout(500000000); //tunjukan semua product , total brp, payment-total kembalian
