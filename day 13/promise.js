// promise merupakan sebuah proses yang memiliki 2 kemungkinan
// berhasil = resolve
// gagal = reject
// berhasil/gagal akan tetap dilakukan = finally

//async function dapat membuat sebuah promise ditunggu
//untuk menunggu proses promise selesai, kita dapat menambahkan await

// const tryPromise = new Promise((resolve, reject) => {
//  let isError = true; //tidak error
//  if (isError) reject({ message: 'Error' });
//  else resolve('Success');
// });

//promise
//variable isError = false
// apabila isError true maka jalankan reject("error")
//selain itu jalankan resolve("success")

//resolve melambangkan bahwa promise berhasil
//resolve memiliki 1 arg yang kita isi dengan string "success"
// then merupakan method yang berjalan apabila resolve dipanggil
// then memiliki arg yang isinya sama dengan arg resolve

const tryPromise = new Promise((resolve, reject) => {
 let isError = false; //tidak error
 if (isError) reject({ message: 'Error' });
 else resolve('Success');
});

const asyncAwait = async () => {
 console.log('satu'); //1
 await tryPromise //2
  .then((value) => {
   console.log(value);
  })
  .catch((err) => {
   console.log(err);
  })
  .finally(() => {
   console.log('akhirnyaa');
  });
 console.log('dua'); //3
};

asyncAwait();

//buat sebuah promise munculkan genap dalam bentuk resolve
//munculkan ganjil dalam bentuk catch
//ada function punya parameter array
//di dalam function arraynya dicheck melalui promise

const check = (arr) => {
 arr.map((val) => {
  new Promise((resolve, reject) => {
   if (val % 2 == 0) resolve('genap');
   else resolve('ganjil');
  })
   .then((genap) => console.log(val, genap))
   .catch((ganjil) => console.log(val, ganjil));
 });
};

// check([2, 5, 4]);
// console.log(1 % 2 == 0);
