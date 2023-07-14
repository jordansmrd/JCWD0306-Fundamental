const { students } = require('./data.json'); //cara import di nodejs
const functions = require('./function2');
const { hey, hey2, functionxyz } = require('./function2');

students.map((student) => console.log(student));

hey();
functionxyz();

const text = {
 employee: [{ firstName: 'John', lastName: 'Doe' }]
};

console.log(typeof JSON.stringify(text), JSON.stringify(text));
console.log(typeof text.toString(), text.toString());
