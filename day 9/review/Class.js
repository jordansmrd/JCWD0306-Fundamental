class Student {
 nama;
 //method yang dipanggil pada saat membuat instance object
 constructor(
  nama,
  age,
  address,
  birthdate,
  NIK,
  namaBapak,
  namaIbu,
  noHp,
  gender
 ) {
  this.nama = nama;
  this.age = age;
  this.address = address;
  this.birthdate = birthdate;
  this.NIK = NIK;
  this.namaBapak = namaBapak;
  this.namaIbu = namaIbu;
  this.noHp = noHp;
  this.gender = gender;
 }
}

class Ujian {
 durasi = '2 jam';
 avgNilai = 0;
 constructor(...students) {
  //   console.log(students);
  //   this.student1 = student1;
  //   this.student2 = student2;
  this['student1'];
  students.map((val, idx) => (this['student' + (idx + 1)] = val));
 }
}
let udin = new Student('udin', 100);
// console.log(udin);
let ujang = new Student('ujang');
let andrew = { nama: 'andrew' };

let kelasUjian = new Ujian(
 new Student('udin', 300),
 new Student('andrew', 300),
 new Student('ujang', 300),
 new Student('kucing', 300)
);

console.log(kelasUjian.student4);
// console.log(kelasUjian.student1.nama);
// console.log(kelasUjian.student2.nama);
