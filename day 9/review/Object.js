let object1 = {
 nama: 'gara',
 ngobrol: () => 'santai',
 berantem() {
  return 'berantem yuk';
 }
};
console.log(object1);

console.log(object1.ngobrol()); //jalankan method ngobrol dari object 1
console.log(object1.berantem()); //jalankan method berantem dari object 1
object1.email = 'gara@mail.com'; //menambahkan 1 key kedalam object 1
console.log(object1.email); //memanggil prop email dari object 1 dengan dot
console.log(object1.nama); //memanggil prop nama dari object 1 dengan dot
console.log(object1['nama']); //memanggil prop nama dari object 1 dengan square
console.log(object1['berantem']()); //memanggil prop nama dari object 1 dengan square
console.log(object1['ngobrol']()); //memanggil prop nama dari object 1 dengan square

//class Object memiliki built-in method
let entries = Object.entries(object1); //return array [ [keys,value],[keys,value], ....]
console.log(entries);
let result = [];
for (let i = 0; i < entries.length; i++) {
 let temp = entries[i][1]; //gara
 let temp2 = entries[i][0]; //nama
 let temp3 = [temp, temp2];
 result.push(temp3);

 //  result.push([entries[i][1], entries[i][0]]); //ngepush array [value,keys]
}
console.log(result);

let keys = Object.keys(object1); //array kumpulan keys

console.log(keys);

result = [];
for (let i = 0; i < keys.length; i++) {
 let temp = object1[keys[i]]; //nama,ngobrol,berantem, email
 let temp2 = keys[i]; //nama,ngobrol,berantem, email
 let temp3 = [temp, temp2];
 //  console.log(temp3);
 result.push(temp3);
}

console.log(result);
