// == (dibandingkan dengan value dan harus sama)
// === (dibandingkan dengan value dan tipe data dan harus sama)
// != (dibandingkan dengan value  harus tidak sama)
// !== (dibandingkan dengan value dan tipe data  harus tidak sama)
// > (lebih besar dari value yang dibandingkan)
// < (lebih kecil dari value yang dibandingkan)
// >= (lebih besar dari atau sama dengan  value yang dibandingkan)
// <= (lebih kecil atau sama dengan value yang dibandingkan)

let age = 16; // declare and assign

if (
 age >= 17 //condition age lebih besar /sama dengan 17
) {
 // task/ code block
 console.log('you can now create an id card');
 console.log('you can now create an id card');
} else {
 console.log('umur anda tidak cukup');
}

if (age == 21) console.log('umur sama dengan 21');

// {} digunakan untuk multistatement
// tanpa {} maka codeblock/task bersifat single statement

let grade = 'C';

if (grade == 'A') {
 console.log('excelent result');
} else if (grade == 'B') {
 console.log('great result');
} else if (grade == 'C') {
 console.log('good result');
} else if (grade == 'D') {
 console.log('ok result');
} else {
 console.log('bad result');
}

let number = 5;
if (number > 5) console.log('lebih besar');
else if (number == 5) console.log('number is 5');
else console.log('hello');
//code diatas merupakan sebuah rangkaian kondisi
// pada saat kondisi pertama tidak dipenuhi maka akan cek kondisi kedua
// pada saat kondisi pertama dan kondisi kedua tidak terpenuhi maka akan menjalankan else

let kendaraan = 'mobil';
if (kendaraan == 'mobil') console.log('anda naik mobil'); //true
else if (kendaraan == 'motor') console.log('anda naik motor');
else console.log('anda jalan kaki');

//1 buah rangkaian kondisi => asalkan 1 kondisi terpenuhi tidak akan cek kondisi lainnya

if (kendaraan == 'mobil') console.log('anda naik mobil'); //true
if (kendaraan == 'motor') console.log('anda naik motor');
else console.log('anda jalan kaki'); //true
//2 buah rangkaian kondisi saat rangkaian kondisi pertama true akan ttp cek kondisi rangkaian kedua

//logical operators
let umur = 17;
let name = 'udun';
let gender = 'cowo';

// && merupakan operator "dan" menjadikan multiconditions dalam 1 kondisi if dan semua kondisi harus true
// || merupakan operator "atau" menjadikan  multiconditions dalam 1 kondisi if dan salah satu kondisi harus true
// ! merupakan opertor "tidak" menjadikan kondisi bukan true
if (umur == 17 || !(name == 'udin' && gender == 'cowo')) {
 console.log('ini anak saya');
} else {
 console.log('umur bukan 17');
}

// name == "udin" && gender == "cowo" => false
// !false => bener ga sih hasil kondisinya false?  betul maka true

if (!(4 + 4 == 8)) {
 console.log('betul');
}

umur = 20;
name = 'brandon';
gender = 'cewe';
//nested if
if (name == 'brandon') {
 console.log('betul namanya brandon');
 if (umur == 20 && gender == 'cowo') console.log('benar umur brandon 20');
 else console.log('ini bukan brandon yang saya cari');
} else {
 console.log('ini bukan brandon ');
}
