let f1 = (parameter) => {
 //expression
};

function f2(parameter) {
 //  return [];
}

console.log(typeof f2());

function recursive(param) {
 console.log(param); //log ayam
 return recursive(param); // panggil function recursive('ayam')
}

//input 5
//1+2+3+4+5
//output 15

function recur(a) {
 //1
 //2
 //3
 //4
 //5
 if (a == 6) {
  return 0;
 }

 //1 + recur(1+1) => 2
 //2 + recur(2+1) => 3
 //3 + recur(3+1) => 5
 //4 + recur(4+1) => 10
 //5 + recur(5+1) => 15
 //6 + recur(6+1) => 0

 return a + recur(a + 1);
}

console.log(recur(1));
// recursive('ayam');

function recur2(a, sum = 0) {
 sum += a; //5 9 12 14 15
 if (a == 1) {
  return sum;
 }
 return recur2(a - 1, sum); //(4,5) (3,9) (2,12)(1,14)
}

console.log(recur2(5));
