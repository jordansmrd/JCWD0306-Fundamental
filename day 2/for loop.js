//for ( declare assign variable ; condition; counter)
//for ( 1st ; 2nd; 3rd)
//1st statement => biasanya digunakan untuk declare dan assign sebuah variable
//2nd statement => digunakan untuk memberikan kondisi untuk menjalankan code block
//3rd statement => berjalan setelah code block tereksekusi

for (let i = 0; i < 10; i++) {
 //code block
 console.log('saya tidak bawa buku');
}
//0 < 3 ? hello => i++
//1 <3 ? hello => i++
// 2 <3 ? hello => i++
// 3<3 ? hello : stop looping

for (let angka = 0; angka < 5; angka++) {
 console.log(angka);
 for (let angka2 = 0; angka2 < 2; angka2++) {
  console.log('saya looping');
 }
}

// while loop
let counter = 1;

while (counter <= 10) {
 //do
 if (counter == 4) break; //break berguna untuk berhenti paksa dari looping
 console.log('saya looping terus ' + counter);
 counter++;
}
console.log(counter);
// do while
// counter = 1;

do {
 //code block
 console.log('saya looping terus ' + counter);
 counter++;
} while (counter <= 10);

// menghitung biaya parkir
// kendaraan = mobil/motor
// 1 jam pertama mobil = 3000 => 2000
// 1 jam pertama motor = 2000 => 1000

// motor , 3 jam , total 4000
