// function say(something) {
//  try {
//   console.log(something); //error karena something1 is not defined
//  } catch (err) {
//   console.log('error');
//  }
// }

function say(something) {
 try {
  console.log(something2);
 } catch (err) {
  console.log('ini error bos');
 }
}

say('helloooo');

// website jual beli
// kalian pilih barang dan kalian klik add to cart
//ternyata productnya udah ga ada

//frontend => user interface => request ke backend
//backend => cari product marjan ? kirim balik ke fe : kosong

function cobatangkap(callback) {
 try {
  callback();
 } catch (err) {
  console.log(err);
 }
}

function cobatangkap2(callback) {
 //  try {
 callback();
 //  } catch (err) {
 //   console.log(err);
 //  }
}
function display() {
 console.log(hehehe);
}

// cobatangkap(display);

console.log('hehehehe');

// cobatangkap(123);

// display();

const tryPromise = new Promise((resolve, reject) => {
 let isError = true; //tidak error
 if (isError) reject({ message: 'Error' });
 else resolve('Success');
});

const tryAndCatch = async () => {
 try {
  let result = await tryPromise;
  //    .then((value) => {
  //     console.log(value);
  //    })
  //    .catch((err) => {
  //     console.log(err);
  //    });
  console.log('ini resolve', result);
  //   console.log('hehehhe');
 } catch (err) {
  console.log('ini reject', err);
 }
};

const promise = async () => {
 try {
  await tryPromise //2
   .then((value) => {
    console.log(value);
   })
   .catch((err) => {
    console.log(err());
   });
 } catch (err) {
  //   console.log(err);
 }
};

promise();
//apa bila sebuah promise menggunakan then dan catch
// then untuk resolve
// catch untuk reject

//try catch
//kita akan mencoba codeblock di dalam try
//dan apa bila code block di dalam try error
// maka akan di tangkap catch

// tryAndCatch();

const tryCatch = () => {
 try {
  let isFalse = true;
  if (isFalse) throw new Error('there is an error'); //reject("there is an error")
  console.log('success');
 } catch (err) {
  console.log(err.message);
 }
};
tryCatch();

const array = ['udin', 'ujang', 'ani', {}];

const tryCatch2 = (array = []) => {
 try {
  array.map((val) => {
   if (typeof val == 'number') throw new Error('tidak boleh number');
   else if (typeof val == 'object') throw new Error('tidak boleh object');
   console.log(val);
  });
  console.log(val);
 } catch (err) {
  console.log(err.message);
 }
};

tryCatch2(array);
