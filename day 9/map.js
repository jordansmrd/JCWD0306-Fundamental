const myMap = new Map();

myMap.set('David', '001');
myMap.set('Buchanan', '002');

console.log(myMap);

for (let [key, value] of myMap) {
 console.log(key + ' = ' + value);
}
