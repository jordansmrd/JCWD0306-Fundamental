const buah = 'pepaya';
// switch case merupakan sebuah rangkaian kondisi
// dimana variable akan dibandingkan (equality) dengan value dan tipedata di dalam case
switch (buah) {
 case 'jeruk': //if
  console.log('ini buah jeruk');
  break;
 case 'manggis': //else if
  console.log('ini buah manggis');
  break;
 case 'duren': //else if
  console.log('ini buah duren');
  break;
 case 'pepaya': //else if
  console.log('ini buah pepaya');
  break;
 default: //else
  console.log('ini bukan buah');
}

const angka = '1';
switch (angka) {
 case 1:
  console.log('ini angka 1');
  break;
 default:
  console.log('ini bukan angka');
}

const grade = 'B';
switch (grade) {
 case 'A':
  console.log('excelent result');
  break; // tanda supaya switchnya ngerem/berhenti
 case 'B':
  console.log('great result');
  break;
 case 'C':
  console.log('good result');
  break;
 default:
  console.log('bad result');
}

//switch sifatnya hanya membandingkan secara value, tipe data  dan wajib equal
//sedangkan if else dapat membandingkan data dengan operator lain selain equal
