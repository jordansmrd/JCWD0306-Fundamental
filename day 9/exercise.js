//buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1/km harga ongkir adalah 2000
//berapa total pricenya ?

// buat 4 function
// 1. hitung total biaya
// 2. addFood menambahkan makanan ke cart
// 3. menghapus makanan di cart
// 4. mengedit qty makanan tertentu di dalam cart

//CRUD = > CREATE , READ (GET=>) , UPDATE ,DELETE

let cart = [];
// addFood => menambahkan isi array cart

const AddFood = (food = {}) => {
 //check apakah sudah ada makanan ini di dalam cart
 const checkIndex = cart.findIndex((product) => {
  if (product.name === food.name) {
   return product;
  }
 });
 if (checkIndex >= 0) {
  //jika makanan sama, maka update qtynya
  cart[checkIndex].qty += food.qty;
 } else {
  //jika belum ada product di cart, maka tambahkan makanan
  cart.push(food);
 }
 return cart;
};

const deleteFood = (foodName = '') => {
 const checkIndex = cart.findIndex((product) => {
  if (product.name.toLowerCase() === foodName.toLowerCase()) {
   return product;
  }
 });
 if (checkIndex >= 0) {
  //jika makanan ditemukan, maka hapus
  cart.splice(checkIndex, 1);
 } else {
  //jika belum ada product di cart, maka munculkan error
  return foodName + ' tidak ditemukan';
 }
 return cart;
};

const editQty = (food = {}) => {
 //check apakah sudah ada makanan ini di dalam cart
 const checkIndex = cart.findIndex((product) => {
  if (product.name === food.name) {
   return product;
  }
 });
 if (checkIndex >= 0) {
  //jika makanan sama, maka update qtynya
  cart[checkIndex].qty = food.qty;
 } else {
  //jika belum ada product di cart, maka munculkan error
  return foodName + ' tidak ditemukan';
 }

 return cart;
};

const total = (restoran = {}) => {
 let totalMakanan = cart.reduce(
  (sum, current) => sum + current.qty * current.price,
  0
 );
 let totalOngkir = restoran.jarak * 2000;

 let total = totalMakanan + totalOngkir;

 return 'Rp ' + total.toLocaleString();
};

console.log(cart);
console.log(AddFood({ name: 'capcay', price: 50000, qty: 5 })); //[ { name: 'capcay', price: 50000, qty: 5 } ]
console.log(AddFood({ name: 'nasgor', price: 10000, qty: 2 })); //[ { name: 'capcay', price: 50000, qty: 7 } ]

console.log(total({ name: 'kwetiaw99', jarak: 5 }));
console.log(deleteFood('nasgor'));

class Food {
 constructor(name, price, qty) {
  this.name = name;
  this.price = price;
  this.qty = qty;
 }
}

class Restoran {
 constructor(name, jarak) {
  this.name = name;
  this.jarak = jarak;
 }
}

class GoFood {
 constructor(name, jarak) {
  this.cart = [];
  this.restoran = new Restoran(name, jarak);
 }

 AddFood(name, price, qty) {
  const food = new Food(name, price, qty);
  //check apakah sudah ada makanan ini di dalam cart
  const checkIndex = this.cart.findIndex((product) => {
   if (product.name === food.name) {
    return product;
   }
  });
  if (checkIndex >= 0) {
   //jika makanan sama, maka update qtynya
   this.cart[checkIndex].qty += food.qty;
  } else {
   //jika belum ada product di cart, maka tambahkan makanan
   this.cart.push(food);
  }
  return this.cart;
 }

 deleteFood(foodName = '') {
  const checkIndex = this.cart.findIndex((product) => {
   if (product.name.toLowerCase() === foodName.toLowerCase()) {
    //Nasgor === nasgor => nasgor === nasgor
    return product;
   }
  });
  if (checkIndex >= 0) {
   //jika makanan ditemukan, maka hapus
   this.cart.splice(checkIndex, 1);
  } else {
   //jika belum ada product di cart, maka munculkan error
   return foodName + ' tidak ditemukan';
  }
  return this.cart;
 }

 editQty(name, price, qty) {
  const food = new Food(name, price, qty);
  //check apakah sudah ada makanan ini di dalam cart
  const checkIndex = this.cart.findIndex((product) => {
   if (product.name === food.name) {
    return product;
   }
  });
  if (checkIndex >= 0) {
   //jika makanan sama, maka update qtynya
   this.cart[checkIndex].qty = food.qty;
  } else {
   //jika belum ada product di cart, maka munculkan error
   return foodName + ' tidak ditemukan';
  }

  return this.cart;
 }

 total(restoran = {}) {
  let totalMakanan = cart.reduce(
   (sum, current) => sum + current.qty * current.price,
   0
  );
  let totalOngkir = restoran.jarak * 2000;

  let total = totalMakanan + totalOngkir;

  return 'Rp ' + total.toLocaleString();
 }
}

// narik data user =>
// const user = { name : "nama user" , email : "", username : " ", password: ""}

// [1]
// a.reduce((prev,next)=>{
// prev = a[0] + a[1]
// })

// a.reduce((sum,current)=>{
// sum = 0 + a[0]
// },0)

//method array
//filter =>  (product,index) =>
//map =>  (product,index) =>
//findIndex => (product,index) =>
//find =>  (product,index) =>

// for (let i = 0; i < array.length; i++) {
//     i itu index
//     array[i] = value
// }

arr = ['ayam', 'udang', 'ikan'];

const a = arr.findIndex((val, i) => {
 if (val == 'ayam' || val == 'udang') return val;
});

console.log(a);
