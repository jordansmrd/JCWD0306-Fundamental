const fruits = ['apple', 'orange', 'grape', 'apple'];

const newFruits = new Set(fruits);

newFruits.add('watermelon');
const e = newFruits.entries();

console.log(newFruits);

console.log(newFruits.size);
