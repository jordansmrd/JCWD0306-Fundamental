function message() {
 console.log('async is easy');
}

function hello() {
 console.log('hello hello bandung');
}
function hello2() {
 console.log('hello hello batam');
}

setTimeout(message, 1);
hello();
hello2();

//sequence
//function timeout (async function)
//hello

//async function merupakan sebuah function yang berjalan dan memiliki sebuah proses waktu tertentu
//dimana proses ini menghiraukan sequencenya
