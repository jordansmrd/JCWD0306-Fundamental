// Create a function to check if two objects are equal
//total key harus sama
//nama key harus sama
//value dalam key harus sama

// function compare(obj1, obj2) {
//  let keys1 = Object.entries(obj1);
//  let keys2 = Object.entries(obj2);

//  if (keys1.length != keys2.length) return 'beda object';

//  for (let i = 0; i < keys1.length; i++) {
//   //obj1 = {"name" : "johan", age : "20"} = [["name","johan"],["age", 20]]
//   //obj2 = {"name" : "johan", age : "20"} = [["name","johan"],["age", 20]]
//   keys1[i][0]; //"name"
//   keys2[i][0]; //"name"
//   keys1[i][1]; //"johan"
//   keys2[i][1]; // "johan"
//   if (keys1[i][0] != keys2[i][0] || keys1[i][1] != keys2[i][1]) {
//    //name != name || johan != johan false
//    //age != age || 20 != 20 false
//    return 'beda object';
//   }
//  }

//  keys1.map((key, i) => {
//   if (key[0] != keys2[i][0] || key[1] != keys2[i][1]) return 'beda object';
//  });

//  keys1.map((key, i) => {
//   let prop1 = key[0];
//   let value1 = key[1];
//   let prop2 = keys2[i][0];
//   let value2 = keys2[i][1];

//   if (prop1 != prop2 || value1 != value2) {
//    return 'beda object';
//   }

//   //  if (key[0] != keys2[i][0] || key[1] != keys2[i][1]) return 'beda object';
//  });

//  return 'sama object';
// }

const compare = (obj1, obj2) => {
 let keys1 = Object.entries(obj1);
 let keys2 = Object.entries(obj2);
 if (keys1.length != keys2.length) {
  return false;
 } else {
  for (let i = 0; i < keys1.length; i++) {
   if (keys1[i][0] != keys2[i][0] || keys1[i][1] != keys2[i][1]) return false;
  }
  return true;
 }
};

console.log(
 compare({ hello: 'hell', sad: 'hello' }, { hello: 'sad', sad: 'hello' })
);

// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { f: 5, c: 3 ,a : 5}
// Output: { a: 1 }

//entries obj1 , obj2

function intersect(obj1, obj2) {
 let keys1 = Object.entries(obj1).sort(); // [["a", 1], ["b",2]]
 let keys2 = Object.entries(obj2).sort(); // [["a", 5], ["c", 3]
 let result = {};
 keys1.map((key, i) => {
  if (key[0] == keys2[i][0] && key[1] == keys2[i][1]) {
   result[key[0]] = key[1];
   //result["a"]
   //result.a = 1 => {a : 1}
  }
 });
}

const intersection = (obj1, obj2) => {
 let keys1 = Object.entries(obj1).sort();
 let keys2 = Object.entries(obj2).sort();
 let intersect = {};
 keys1.map((val, i) =>
  val[0] == keys2[i][0] && val[1] == keys2[i][1]
   ? (intersect[val[0]] = val[1])
   : null
 );

 return intersect;
};

console.log(intersection({ a: 1, b: 2 }, { a: 1, c: 3, b: 2 }));

// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
// Array1 → [
// { name: 'Student 1', email : 'student1@mail.com'  },
// { name: 'Student 2', email : 'student2@mail.com'  }
// ]
// Array2 → [
// { name: 'Student 1', email : 'student1@mail.com'  },
//// { name: 'Student 2', email : 'student3@mail.com'  },

// { name: 'Student 3', email : 'student3@mail.com'  },

// ]

// Result :
// ArrayResult → [
// { name: 'Student 1', email : 'student1@mail.com'  }, looping pertama
// { name: 'Student 2', email : 'student2@mail.com'  }, looping kedua
// { name: 'Student 1', email : 'student1@mail.com'  }, // index 2
// { name: 'Student 2', email : 'student2@mail.com'  }, //index 2+1
// { name: 'Student 3', email : 'student3@mail.com'  },
// ]

const merge = (arr1, arr2) => {
 const merge = arr1.concat(arr2);
 merge.map((val, idx) => {
  // [
  // { name: 'Student 1', email : 'student1@mail.com'  },
  // { name: 'Student 2', email : 'student2@mail.com'  },
  // { name: 'Student 1', email : 'student1@mail.com'  },
  // { name: 'Student 3', email : 'student3@mail.com'  }
  // ]

  //arr1 = 2
  //arr2 = 2
  // merge = 4

  arr1.concat(arr2);

  // if (
  //  val.name == merge[arr1.length + idx].name &&
  //  val.email == merge[arr1.length + idx].email
  // )
  val.name == merge[arr1.length + idx]?.name &&
  val.email == merge[arr1.length + idx]?.email
   ? merge.splice(arr1.length + idx, 1)
   : null;
 });

 return merge;
};
console.log(
 merge(
  [
   { name: 'Student 1', email: 'student1@mail.com' },
   { name: 'Student 2', email: 'student2@mail.com' }
  ],

  [
   { name: 'Student 1', email: 'student1@mail.com' },
   { name: 'Student 3', email: 'student3@mail.com' },
   { name: 'Student 4', email: 'student3@mail.com' },
   { name: 'Student 5', email: 'student3@mail.com' }
  ]
 )
);

// Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example :
// Input : [{ name: 'David', age: 20 }]
// Output : [{ David: 'name', 20: 'age'}]
function tukar2(arrObj = []) {
 arrObj.map((val) => {
  let newObj = {};
  Object.keys(val).map((key) => (newObj[val[key]] = key));
  //val = { David: 'name', 20: 'age'}
  // val[key] => val["name"] => val.name = "david"=> val.age = 20
  //newObj["david"] = "name"  => newObj["20"] = "age"
  //  newObj.david = "name" => { "david" : "name" , "20" : "age" }
  //{ name: 'David', age: 20 } => ["name", "age"] => [ ["name", "david"], ["age" , 20]]
 });
}

const tukar = (arrObj = []) =>
 arrObj.map((val) => {
  let newObj = {};
  Object.keys(val).map((key) => (newObj[val[key]] = key)); //{"david" : "name", "20" : "age"}
  return newObj;
 });

let arr = [
 { name: 'David', age: 20 },
 { name: 'a', age: 18, email: 'a@mail.com' }
];
console.log(tukar(arr));

// let ent =  Object.entries(val) = [["name", "age"]]
// ent.map(([key,val]) => { [val] : [key]})

const output = arr.map(({ name, age }) => {
 return { [name]: 'name', [age]: 'age' };
});
console.log(output);

// arr.map(({ key, val }) => console.log('this', key, val));

// Create a function to find a factorial number using recursion
// n = n x (n-1) ( n-2) (n-3)...
// 5 = 5 x 4 x 3 x 2 x 1 => 120
//

function factor(n = 0, r = 1) {
 //n =5, 4,3, 2, 1
 if (n > 1) return factor(n - 1, (r *= n)); // factor(4,5) // factor(3,20) // factor(2,60) // factor(1,120)
 return r; //120
}
factor(5);

const factorial = (n = 0, f = 1) => {
 if (n > 1) return factorial(n - 1, f * n);
 return f;
};

console.log(factorial(5));
