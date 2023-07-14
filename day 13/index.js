function calculator(a, b) {
 return a + b;
}

function displayer(something) {
 console.log(something);
}

let result = calculator(5, 5); // 5 + 5 = 10
displayer(result);
//sequence pertama harus memanggil 2 function

function calculator2(a, b) {
 let result = a + b; // 5 + 5 = 10
 displayer(result); // 10
}

calculator2(5, 5);
//sequence kedua hanya memanggil 1 function
//tetapi tidak dapat mencegah untuk tidak menampilkan hasilnya

function calculator3(
 a = 0,
 b = 2,
 callback = (value, index = 0, array = []) => {}
) {
 callback(a + b);
}
// calculator3(5, 5, );
//sequence ketiga  memanggil 1 function
//sequence ketiga memiliki 3 params. dimana param callback akan dipanggil sesuai dengan functionnya

// function memiliki nama
// contoh function a() => maka nama function tersebut adalah a
//untuk memanggil a harus menggunakan a() => menjalankan
console.log(calculator);
console.log(calculator(1, 1));

// const a = 1;
// a.concat;

function call(callback = () => {}) {
 callback();
}

function hey() {
 console.log('heheheheh');
}

function hey2() {
 console.log('hohohoho');
}

call(hey);
call(hey2);

// coba buat function map sendiri

const students = ['enos', 'panji', 'denni', 'adit'];

function callStudent(students = [], displayer) {
 for (let i = 0; i < students.length; i++) {
  displayer(students[i]);
 }
}
callStudent(students, displayer);
