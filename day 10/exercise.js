// tokped
// -- kendaraan, buku, pakaian, hp, skincare
// -- setiap barang punya nama,category, berat, deskripsi, warna, price, stock

// -- kendaraan jumlah roda, bahan bakar (listrik/bensin/solar), tahun
// -- buku penulis , penerbit,  jumlah_halaman
// -- pakaian ukuran, bahan (katun/spandex/wool) , merk
// -- hp processor, ram, storage
// -- skin care  jenis (anti aging/pelembab/sunscreen) , ukuran (ml) , expired (year)

// -- add to cart => apabila ada yang sama maka jumlahkan qtynya jika lebih maka ambil maxStock
//apakah product ini ada?
//stock > 0 ?
//stock < qty ?
// product ini sudah ada di cart ?
//apabila product sudah ada maka qty di dalam cart akan ditambah
//total qty product tertentu melebihi stock ? maka total qty akan menjadi max Stock

//apa bila tidak ada product di cart ? langsung push ke dalam cart

// -- total belanja
// menunjukan total belanjaan kita. seluruh cart dilooping untuk mendapat sum(price*qty)

// -- edit qty => tidak boleh melebihi stock
//index
// cek apakah product ini ada di dalam cart?
// jika ada dapat index => access key di dalam cartnya
// replace key qty = parameter qty

//apa bila index tidak ketemu maka tidak bisa edit

// -- hapus cart
// -- bayar () => pada saat bayar stock berkurang cart dihapus

// -- class product nama,category, berat, deskripsi, warna, price, stock
// -- kendaraan ext product jumlah roda, bahan bakar (listrik/bensin/solar), tahun
// -- buku ext product penulis , penerbit,  jumlah_halaman
// ...

// class tokped
// cart = []
// products =[]

// function
// -- add product
// -- add to cart => apabila ada yang sama maka jumlahkan qtynya jika lebih maka ambil maxStock ,
//  tambahin 1 key qty
// -- total belanja
// -- edit qty => tidak boleh melebihi stock
// -- hapus cart
// -- bayar () => pada saat bayar stock berkurang cart dihapus

// products = [ {
//     nama: "bedak micin",
//     stock : 10
// }]

// addToCart("bedak micin", 5)
// cari di array products yang nama productnya adalah 'bedak micin'

// ketemu? masukan ke dalam cart

// carts = [
// {
//     nama: "bedak micin",
//     stock : 10,
//     qty : 5
// }
// ]

// -- setiap barang punya nama,category, berat, deskripsi, warna, price, stock

class Product {
 constructor(nama, berat, deskripsi, warna, price, stock) {
  {
   this.nama = nama;
   this.berat = berat;
   this.deskripsi = deskripsi;
   this.warna = warna;
   this.price = price;
   this.stock = stock;
  }
 }
}
// -- kendaraan, buku, pakaian, hp, skincare
// -- kendaraan jumlah roda, bahan bakar (listrik/bensin/solar), tahun
class Kendaraan extends Product {
 constructor(
  nama,
  berat,
  deskripsi,
  warna,
  price,
  stock,
  jumlah_roda,
  bahan_bakar,
  tahun
 ) {
  super(nama, berat, deskripsi, warna, price, stock);
  this.kategori = 'kendaraan';
  this.jumlah_roda = jumlah_roda;
  this.bahan_bakar = bahan_bakar;
  this.tahun = tahun;
 }
}
// -- buku penulis , penerbit,  jumlah_halaman
class Buku extends Product {
 constructor(
  nama,
  berat,
  deskripsi,
  warna,
  price,
  stock,
  penulis,
  penerbit,
  jumlah_halaman
 ) {
  super(nama, berat, deskripsi, warna, price, stock);
  this.kategori = 'buku';
  this.penulis = penulis;
  this.penerbit = penerbit;
  this.jumlah_halaman = jumlah_halaman;
 }
}

// -- pakaian ukuran, bahan (katun/spandex/wool) , merk
class Pakaian extends Product {
 constructor(nama, berat, deskripsi, warna, price, stock, ukuran, bahan, merk) {
  super(nama, berat, deskripsi, warna, price, stock);
  this.kategori = 'pakaian';
  this.ukuran = ukuran;
  this.bahan = bahan;
  this.merk = merk;
 }
}

// -- hp processor, ram, storage

class Hp extends Product {
 constructor(
  nama,
  berat,
  deskripsi,
  warna,
  price,
  stock,
  processor,
  ram,
  storage
 ) {
  super(nama, berat, deskripsi, warna, price, stock);
  this.kategori = 'smartphone';

  this.processor = processor;
  this.ram = ram;
  this.storage = storage;
 }
}

// -- skin care  jenis (anti aging/pelembab/sunscreen) , ukuran (ml) , expired (year)
class Skincare extends Product {
 constructor(
  nama,
  berat,
  deskripsi,
  warna,
  price,
  stock,
  jenis,
  ukuran,
  expired
 ) {
  super(nama, berat, deskripsi, warna, price, stock);
  this.kategori = 'skincare';
  this.ukuran = ukuran;
  this.jenis = jenis;
  this.expired = expired;
 }
}

class Tokped extends Product {
 #products = []; //[ { nama: "kemeja h&m", ....sisanya}]
 #cart = [];

 #getIndex(nama, arr) {
  return arr.findIndex((val) => val.nama.toLowerCase() == nama.toLowerCase());
 }

 #checkTotal() {
  return this.#cart.reduce((sum, curr) => {
   console.log(
    curr.nama,
    'qty',
    curr.qty,
    'price',
    curr.price.toLocaleString()
   );
   return sum + curr.price * curr.qty;
  }, 0);
 }

 showProducts() {
  console.log(this.#products);
 }

 // / -- add product
 addProduct(product) {
  let check = this.#getIndex(product.nama, this.#products);
  if (check >= 0) {
   return console.log('product sudah ada');
  }
  this.#products.push(product);
  return console.log('1 product berhasil ditambahkan');
 }

 // -- hapus cart
 deleteCart(nama) {
  let index = this.#getIndex(nama, this.#cart); // -1 atau 0 ke atas
  if (index >= 0) {
   this.#cart.splice(index, 1);
   return console.log(nama, 'berhasil dihapus');
  }
  return console.log(nama, 'tidak ditemukan');
 }

 // -- add to cart => apabila ada yang sama maka jumlahkan qtynya jika lebih maka ambil maxStock ,tambahin 1 key qty
 addToCart(
  nama,
  qty //Komik Naruto, 20
 ) {
  const indexProduct = this.#getIndex(nama, this.#products);

  if (indexProduct >= 0) {
   //check stock barang
   if (this.#products[indexProduct].stock === 0)
    return console.log('stock barang kosong');

   const indexCart = this.#getIndex(nama, this.#cart);
   //check apabila barang sudah ada di cart
   if (indexCart >= 0) {
    if (qty + this.#cart[indexCart].qty > this.#cart[indexCart].stock) {
     //apabila qty yg ditambah melebihi stock yg ada, maka qty cart menjadi max stock
     this.#cart[indexCart].qty = this.#cart[indexCart].stock;
    } else {
     //tambah qty sesuai dengan product yang sama
     this.#cart[indexCart].qty += qty;
    }
   } else {
    if (qty > this.#products[indexProduct].stock) {
     return console.log('qty melebihi stock');
    }
    this.#cart.push({ ...this.#products[indexProduct], qty });
    return console.log(nama, 'berhasil ditambah ke cart');
   }
  }

  //jika product tidak ditemukan
  return console.log(nama, 'tidak ditemukan');
 }

 // -- total belanja
 showCart() {
  if (this.#cart.length == 0) return console.log('cart anda kosong');
  return console.log('total', this.#checkTotal().toLocaleString());
 }
 // -- edit qty => tidak boleh melebihi stock
 editQty(nama, qty) {
  let indexCart = this.#getIndex(nama, this.#cart);
  if (indexCart >= 0) {
   //check apakah qty melebihi stock?
   if (qty > this.#cart[indexCart].stock)
    return console.log('qty melebihi stock');
   this.#cart[indexCart].qty = qty;

   return console.log('qty berhasil diupdate');
  }
  return console.log(nama, 'tidak ditemukan');
 }

 // -- bayar () => pada saat bayar stock berkurang cart dihapus
 purchase(money = 0) {
  if (this.#cart.length > 0) {
   let total = this.#checkTotal();
   if (total > money) {
    return console.log('uang anda tidak cukup');
   }

   this.#cart.map((item) => {
    const indexProduct = this.#getIndex(item.nama, this.#products);
    this.#products[indexProduct].stock -= item.qty;
   });

   this.#cart.splice(0, this.#cart.length); //menghapus semua cart
   return console.log(
    'Terimakasih sudah membeli, kemabalian anda adalah',
    (money - total).toLocaleString()
   );
  }
  return console.log('cart kosong');
 }
}

const tokped = new Tokped();

let bmw = new Kendaraan(
 'Mobil BMW Seri 323i',
 2000,
 'Mobil BMW 323i dengan 170hp ',
 'Merah',
 80000000,
 5,
 4,
 'bensin',
 1996
);

let avanza = new Kendaraan(
 'Mobil Toyota Avanza',
 1500,
 'Mobil Toyota Avanza cocok untuk keluarga',
 'silver',
 180000000,
 10,
 4,
 'bensin',
 2015
);

let kemeja = new Pakaian(
 'Kemeja h&m',
 1,
 'kemeja keren untuk fall 2023',
 'biru',
 300000,
 10,
 'xl',
 'katun',
 'H&M'
);

let sunblock = new Skincare(
 'Sunblock baby',
 1,
 'sunblock aman untuk bayi anda',
 'orange',
 150000,
 10,
 'sunblock',
 150,
 2025
);

let samsung = new Hp(
 'Samsung S25',
 1,
 'samsung s25 smartphone canggih masa kini',
 'black',
 1500000,
 10,
 'snapdragon v12',
 16,
 256
);

let naruto = new Buku(
 'Komik Naruto',
 1,
 'komik manga naruto',
 'black',
 15000,
 12,
 'masashi kishimoto',
 'Elex Media Komputindo',
 150
);

// tokped.addProduct(bmw);
// tokped.addProduct(avanza);
tokped.addProduct(kemeja);

tokped.addProduct(naruto);
// tokped.addProduct(sunblock);
// tokped.addProduct(samsung);

tokped.showProducts();

tokped.deleteCart('Komik Naruto');
tokped.editQty('Komik Naruto', 5);
tokped.purchase(15000000);

tokped.addToCart('Komik Naruto', 5);
tokped.addToCart('Komik Naruto', 20);
tokped.addToCart('Komik Naruto', 20);
tokped.addToCart('Komik Naruto', 20);
tokped.addToCart('Komik Naruto', 20);
tokped.addToCart('Komik Naruto', 20);
tokped.addToCart('Komik Naruto', 20);
tokped.addToCart('Kemeja h&m', 5);

tokped.showCart();

tokped.purchase(1680000);
tokped.showCart();

//naruto = 12 - 12
//kemeja = 10 - 5

tokped.showProducts();

tokped.addToCart('Komik Naruto', 5);
// tokped.addToCart('Samsung S25', 1);
// tokped.addToCart('Komik Naruto', 5);
// tokped.deleteCart('Komik Naruto');
// tokped.editQty('Komik Naruto', 5);

// tokped.editQty('Samsung S25', 10);

// tokped.purchase(15000000);
// tokped.showCart();
// tokped.showProducts();
// tokped.addToCart('Samsung S25', 1);
