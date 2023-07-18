// Write a code to check whether the date is a weekend.
const weekendChecker = (date = new Date()) =>
  date.getDay() == 0 || date.getDay() == 6 ? "weekend" : "weekday";

//0 -6
//0 = minggu
//6 sabtu

console.log(weekendChecker(new Date("2023-07-14")));
//YYYY-MM-DD

// Write a code to find GCD of two numbers → use while.
// 27 = 3 3 3
// 36 = 2 2 3 3
// GCD = 3*3 = 9
const GCD = (number1, number2) => {
  let num = 2; // minimum bagi
  let res = 1; // result
  //4 <= 3 && 4 <= 4
  while (num <= number1 && num <= number2) {
    if (number1 % num == 0 && number2 % num == 0) {
      number1 = number1 / num; // 9 3
      number2 = number2 / num; // 12 4
      res *= num; //3 *3 = 9
      num = 2;
    } else {
      num++; //3
    }
  }
  return res;
};

console.log("GCD :", GCD(36, 60));
// Write a code to find LCM of two numbers → use do … while.

const LCM = (number1, number2) => {
  let res = 0;
  do {
    res += number1; //20
    //20%10 ==0 && 20%4 ==0
    if (res % number2 == 0 && res % number1 == 0) break;
  } while (true);
  return res;
};
//4 => 8 + 12 + 16 + 20
//10 => 20
// 20%4 ==0 && 20%10 == 0
console.log("LCM :", LCM(4, 10));

// Write a code to find most common character from a string
// "agar" == a2 g,r
//agars => 5
//agar
//aabbc

const mostCommon = (string = "") => {
  let temp = string.split(""); // a,g,a,r
  let set = new Set(temp); //a,g,r
  let common = { max: 0, char: "" }; //max = 2 , char = "tidak ada"
  set.forEach((val) => {
    //a, b ,c
    let length = temp.filter((tmp) => tmp == val).length; //c => 1
    if (length > common.max) {
      common.char = val; // "a"
      common.max = length; //2
    } else if (length == common.max) common.char = "tidak ada";
  });
  return common.char;
};

console.log(mostCommon("aab"));

// Write a code to sort a string alphabetically (with and without sort function)
const sort1 = (string = "") => string.split("").sort().join("");
console.log(sort1("agar agar"));
//aaaaggrr
console.log("a".charCodeAt()); //97
console.log("g".charCodeAt()); //103
console.log("r".charCodeAt()); //114
console.log(" ".charCodeAt()); //32

const sort2 = (string = "") => {
  let temp = string.toLowerCase().split(""); // [" ",a,a,a,a,g,g,r,r] 9
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      //   if (temp[i].charCodeAt() > temp[j].charCodeAt()) {
      if (temp[i] > temp[j]) {
        // 97 >103
        //97 > 114
        let tmp = temp[i]; //a g
        temp[i] = temp[j]; //" " a
        temp[j] = tmp; // a g
        //[" ",a,a,a,a,g]
      }
    }
  }
  return temp.join("");
};

// Write a code to get minimum date from array of dates.
const minDate = (dates = []) => dates.sort((a, b) => a - b)[0];

console.log(
  minDate([
    new Date("1999-09-09"),
    new Date("2000-09-09"),
    new Date("1999-08-09"),
    new Date("1999-01-09"),
    new Date("1998-01-01"),
  ])
);

// Write a code that calculates the sum of all elements of a two-dimensional array
// [[1,2],[3,4],2]
//[3,7]
// 10
//array[1][2]

const sum2Dimensional = (array = [[], []]) =>
  array.reduce(
    (total, current) =>
      total + current.reduce((subtotal, curr) => subtotal + curr, 0), //7
    0
    //3 +7
  );

console.log(
  sum2Dimensional([
    [1, 2],
    [5, 6],
  ])
);

// Write a code to find the longest common prefix string amongst an array of strings.
//"budi", "buku", "buah"
// b,u,d,i
//b,bu,bud,budi
//

//budi memiliki b? true
//arr[0] => budi.slice(0,1) => b
//arr.filter((str) => str.includes("bud")) //budi = 1
//array.length == filter.length ? sama berarti semua element memiliki char "bu"
//prefix bud tidak dimiliki element lain
//budi.slice(0,2) => 'bu'

const longestPrefix = (arr = []) => {
  for (let char = 1; char <= arr[0].length; char++) {
    let tmp = arr.filter((str) => str.includes(arr[0].slice(0, char)));
    if (tmp.length < arr.length) return arr[0].slice(0, char - 1);
  }
  return arr[0];
};

console.log(longestPrefix(["hello", "helloi", "hellou"]));

// Write a code that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half
const half = (arr) => arr.slice(0, Math.ceil(arr.length / 2));
console.log(half([1, 2, 3, 4, 5]));

// Write a code to get the number of days in a month
// Example : month = 1, year = 2022 → 31
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
console.log(daysInMonth(2, 2023), "days");

// Write a code to count the number of days passed since beginning of the year
const passedDays = () => {
  let today = new Date();
  let begin = new Date(today.getFullYear(), 1, 1);
  return Math.floor((today - begin) / 1000 / 3600 / 24);
};

console.log(passedDays(), "days");

// Write a code to calculate age
const age = (birthdate) => {
  let today = new Date();
  return Math.floor((today - birthdate) / 1000 / 3600 / 24 / 30 / 12);
};

console.log(age(new Date(1996, 1, 21)), "years old");
