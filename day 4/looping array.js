//map
const arrWarna = ['biru', 'merah', 'ijo', 'kuning', 'cokelat', 'putih'];

console.log(arrWarna.map((warna, index) => (warna == 'biru' ? warna : 1)));
// map sebuah function untuk looping
// return dari map adalah sebuah array
// isi array dari map tergantung dari hasil return si cbfunction

//buat function kumpulan(arr), bedakan yang genap dan ganjil
//buat function, parameternya adalah array of number
//array akan dilooping menggunakan map
// apa bila %2 ==0 maka return genap , else ganjil

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cekGenap = (numbers) => {
 return numbers.map((val) =>
  val % 2 == 0
   ? console.log(val + ' adalah genap')
   : console.log(val + ' adalah ganjil')
 );
};

cekGenap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//filter => menyaring isi array. hasil return merupakan array yang sudah disaring
console.log(arrNumber.filter((val) => val % 2 == 0)); // [ 2, 4, 6, 8, 10 ]

//find => mencari element di dalam array. return val apabila kondisi true
console.log(arrNumber.find((val) => val % 2 == 0)); // 2

//reduce => menjumlahkan number dalam sebuah array
// 5 => 5 +4 +3 + 2 +1

console.log(arrNumber.reduce((sum, curVal) => (sum += curVal)));
//ngomongin callback
//arg1 merupakan sebuah variable yg diambil dari value index ke 0 => 1
//arg2 merupakan sebuah variable yang diambil dari value index setelah 0
//1+=2 => 3+4 => 7+5 => ..... 55

console.log(arrNumber.reduce((sum, curVal) => (sum += curVal), 100));
//reduce arg
//arg1 => callback
//arg2 => initialValue. pada saat arg2 tidak diisi maka dia akan ambil dari index ke 0

//isi sum = 100
//curVal = diambil dari index ke 0 => 1
