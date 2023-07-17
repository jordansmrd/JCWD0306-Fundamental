function multi(a, b) {
 return a * b;
}

function sum(a, b) {
 return a + b;
}

function inverse(number, inv) {
 if (inv) return number * -1;
 return number;
}

function inverse2(number, inv) {
 if (inv) return number * -1;
 return number;
}

module.exports = { multi, sum, inverse, inverse2 };
