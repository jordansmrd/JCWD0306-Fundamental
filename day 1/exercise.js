// Write a code to find area of rectangle.
let P = 10;
let L = 5;
console.log(`Luas persegi panjang ${P}cm dan lebar ${L}cm adalah ${P * L}cm`);

// Write a code to find perimeter of rectangle.

console.log(
 `Keliling persegi panjang ${P}cm dan lebar ${L}cm adalah ${2 * (P + L)}cm`
);

// Write a code to find diameter, circumference and area of a circle.
let r = 5;

console.log(`diameter dari jari-jari lingkaran ${r}cm adalah ${2 * r}cm`);
console.log(
 `keliling dari jari-jari lingkaran ${r}cm adalah ${(2 * Math.PI * r).toFixed(
  2
 )}cm`
);
console.log(
 `luas dari jari-jari lingkaran ${r}cm adalah ${(Math.PI * r ** 2).toFixed(
  2
 )}cm`
);

// Write a code to find angles of triangle if two angles are given.
let angle1 = 80;
let angle2 = 60;
console.log(`sudut segitiga terakhir adalah ${180 - angle1 - angle2}`);

// Write a code to get difference between dates in days.
let date1 = new Date('2023-06-05');
let date2 = new Date('2023-06-10');
console.log((date2 - date1) / 1000 / 3600);
let diffdate = (date2 - date1) / 1000 / 3600 / 24;
console.log(
 `jarak antara ${date1.toLocaleDateString()} dan ${date2.toLocaleDateString()} adalah ${diffdate} hari`
);

// Write a code to convert days to years, months and days.
// Example : 400 days → 1 year, 1 month, 5 days
// 1 year : 365 days, 1 month : 30 days

let days = 396;
let year = Math.floor(days / 365); // 1
let month = Math.floor((days % 365) / 30); //1
let day = (days % 365) % 30;

console.log(` ${days} days → ${year} year, ${month} month, ${day} days`);
