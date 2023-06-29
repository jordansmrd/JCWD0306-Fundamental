// conversion type data dan value menjadi boolean

//falsy
// ""
// 0
// null
// undefined
// NaN
// false

//truthy
// " "
// 1
// []
// {}
// "1"
// "0"
// "false"
// "true"
// true

let number = 1;
if (number) console.log('true');
// variable/nilai dan tipedata di dalam if =>
// diconversi menjadi boolean => hasil booleannya menjadi kondisi if

if (!0) console.log('nol');
// 0 => false => karena false maka kondisi tidak terpenuhi

//ternary
const str = 'c';
if (str == 'javascript') console.log('hello');
else console.log('bukan javascript');

console.log(
 str == 'javascript'
  ? 'hello'
  : str == 'phyton'
  ? 'phyton'
  : 'bukan programming language'
);

console.log(1 ? '1 itu true' : 'bukan 1');
