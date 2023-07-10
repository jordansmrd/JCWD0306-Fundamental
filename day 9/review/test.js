const keranjang = ['bayam', 'indomie', 'tomat'];

//hapus indomie
const indexItem = keranjang.indexOf('indomie');
console.log(keranjang.splice(indexItem, 1));

console.log(keranjang);

const keranjang2 = [
 {
  product: 'bayam',
  qty: 5,
  price: 2000
 },
 {
  product: 'indomie',
  qty: 10,
  price: 2500
 },
 {
  product: 'tomat',
  qty: 11,
  price: 1000
 }
];

keranjang2.push({
 product: 'beras',
 qty: 1,
 price: 36000
});

console.log(keranjang2);
//cek apakah sudah ada product ini di dalam keranjang ?
//jika ada maka sum qty
// jika belum ada, maka push ke keranjang

//findIndex => letak index
//map  => array
//find => element
//filter => array

const beras = {
 product: 'beras',
 qty: 1,
 price: 36000
};

const cek = keranjang2.findIndex((val, index) => {
 if (val.product == beras.product) {
  return index;
 }
});

console.log('cek', cek);

if (cek >= 0) {
 keranjang2[cek].qty += beras.qty;
} else {
 keranjang2.push(beras);
}

console.log(keranjang2);

//berapa total harga di keranjang
let totalHarga = 0;
for (let i = 0; i < keranjang2.length; i++) {
 let sum = keranjang2[i].price * keranjang2[i].qty;
 console.log(sum);
 totalHarga = totalHarga + sum;
}

console.log(totalHarga.toLocaleString());

// () => { }

//buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1/km harga ongkir adalah 2000
//berapa total pricenya ?

// buat 4 function
// 1. hitung total biaya
// 2. menambahkan makanan ke cart
// 3. menghapus makanan di cart
// 4. mengedit qty makanan tertentu di dalam cart

let cart = [];
