const calc = (a, b) => {
 return a * b;
};

const display = (value) => console.log(value);

display(calc(1, 2));

// setTimeout(() => {
//  console.log('task 2');
// }, 3000);

const promise = async () => {
 await new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve(console.log('task 2'));
  }, 3000);
 });

 console.log('task 3');
};
// promise();

new Promise(async (resolve, reject) => {
 setTimeout(() => {
  resolve('hello');
 }, 3000);

 //  reject(new Error('hehehe'));
})
 .then((resolve) => {
  console.log(resolve);
 })
 .catch((err) => {
  console.log(err);
 });

console.log('task 3');

const data = require('./data.json');
console.log(data);
const hey = require('./function2');

hey();
