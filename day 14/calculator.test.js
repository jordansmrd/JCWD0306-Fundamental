const { multi, sum, inverse } = require('./calculator');

test('test multi', () => {
 expect(multi(3, 3)).toBe(9);
 expect(multi(3, 5)).toBe(15);
});

test('test sum', () => {
 expect(sum(3, 3)).toBe(6);
 expect(sum(5, 5)).toBe(10);
});

test('test inverse', () => {
 expect(inverse(3, true)).toBe(-3);
 expect(inverse(3, false)).toBe(3);
});
