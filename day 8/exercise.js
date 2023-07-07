//1 kelas employee => name,age

class Employee {
 constructor(name, age) {
  this.name = name;
  this.age = age;
  this.hour = 0;
 }
 //  method untuk menambahkan jam kerja employee
 addHour(hour) {
  this.hour += hour;
 }
}

const udin1 = new Employee('udin', 20);
udin1.addHour(5);
console.log(udin1);

//1. jam
//gaji per jamnya
//hitung gaji = jam * gajiperjam

//6 jam pertama = 100k
//setelah 6 jam = 75k

class FulltimeEmployee extends Employee {
 beforesix = 100000; // sebelum 6 jam, gajinya 100k
 aftersix = 75000; // setelah 6 jam, gajinya 75k

 constructor(name, age) {
  super(name, age); //memanggil constructor miliki employee
  this.salary = 0; //gajinya masih 0
 }

 countSalary() {
  if (this.hour > 6) {
   this.salary += 6 * this.beforesix; // 6 * 100k = 600k
   this.salary += (this.hour - 6) * this.aftersix; // 7 -6 = 1jam. 1 * 75k = 75k
  } else {
   this.salary += this.hour * this.beforesix; // 5*100 = 500
  }
  return this.salary.toLocaleString('id-ID'); // 675k
 }
}

class ParttimeEmployee extends Employee {
 beforesix = 50000;
 aftersix = 30000;
 constructor(name, age) {
  super(name, age);
  this.salary = 0;
 }

 countSalary() {
  if (this.hour > 6) {
   this.salary += 6 * this.beforesix;
   this.salary += (this.hour - 6) * this.aftersix;
  } else {
   this.salary += this.hour * this.beforesix;
  }
  return this.salary.toLocaleString('id-ID');
 }
}

const udin = new ParttimeEmployee('udin', 20);
udin.addHour(7); //6*50 = 300, 1*30 = 30. => 330
console.log(udin.countSalary()); //

const ujang = new FulltimeEmployee('ujang', 20);
ujang.addHour(7); //6*100 = 600, 1*75 = 75 => 675
console.log(ujang.countSalary());

// Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health < 0
// Requirements :
// Create ShootingGame & Player class
// ShootingGame class :
// constructor(player1, player2) → player objects as a parameter
// getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// start() → start shooting games
// Player class :
// Property → name, health (default 100), power (default 10)
// hit(power) →  subtract player health
// useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ShootingGame start() function flow :
// In every turn :
// Show each player status before shooting
// Get random item for each player before shooting
// Show each player status after shooting
// Show winner name

class Player {
 constructor(name) {
  this.name = name;
  this.health = 10000000;
  this.power = 10;
 }
 damage(power) {
  this.health -= power;
  if (this.health < 0) this.health = 0;
 }
 useItem(item) {
  //item =  {health : 0 , power : 10} atau  {health : 10 , power : 0}
  this.health += item.health; //100 +10 = 110
  this.power += item.power; //10 +0 = 10
 }
 showStatus() {
  console.log(
   `Player ${this.name} (Health => ${this.health}, Power => ${this.power}) `
  );
 }
}

const player1 = new Player('player1'); // {name : "player1" , health : 100, power : 10}
setTimeout(() => {
 console.log('hello');
}, 5000);

// console.log(player1);
player1.damage(50);
player1.useItem({ power: 0, health: 59 });

player1.showStatus();

class ShootingGame {
 constructor(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
 }

 getRandomItem() {
  return Math.floor(Math.random() * 2)
   ? { health: 0, power: 10 }
   : { health: 10, power: 0 };
 }
 start() {
  let first = Math.floor(Math.random() * 2);
  // jika 0 maka player 2 akan jalan duluan
  // jika 1 maka player 1 akan jalan duluan
  while (this.player1.health > 0 && this.player2.health > 0) {
   this.player1.showStatus(); //Player udin (Health => 10, Power => 20)
   this.player1.showStatus(); //Player ujang (Health => 50, Power => 40)
   this.player1.useItem(this.getRandomItem()); //Player udin (Health => 20, Power => 20)
   this.player2.useItem(this.getRandomItem()); //Player ujang (Health => 50, Power => 50)
   if (first) {
    this.player2.damage(this.player1.power); //player 2 akan terkena serangan sebesar player1.power
    //player2.health -= player1.power = 30
    if (this.player2.health > 0) this.player1.damage(this.player2.power);
    //player1.health = 0
    else break;
   } else {
    this.player1.damage(this.player2.power);
    if (this.player1.health > 0) this.player2.damage(this.player1.power);
    else break;
   }
  }

  this.player1.showStatus();
  this.player2.showStatus();
  console.log(
   this.player1.health <= 0
    ? `the winner is ${this.player2.name}`
    : `the winner is ${this.player1.name}`
  );
 }
}

let game = new ShootingGame(new Player('udin'), new Player('ujang'));
console.log(game);

game.start();

// console.log(Math.floor(Math.random() * 2)); //hasilnya adalah antara 0 atau 1
