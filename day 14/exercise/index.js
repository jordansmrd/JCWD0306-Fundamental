const calculator = {
 hasil: 0,
 penjumlahan(number) {
  return (this.hasil += number);
 },
 pembagian(number) {
  return (this.hasil /= number);
 },
 pengurangan(number) {
  return (this.hasil -= number);
 },
 perkalian(number) {
  this.hasil == 0 ? 1 : null;
  return (this.hasil *= number);
 },
 pangkat2() {
  return (this.hasil **= 2);
 },
 akarPangkat2() {
  return (this.hasil = Math.sqrt(this.hasil));
 },
 akarPangkat3() {
  return (this.hasil = Math.pow(this.hasil, 1 / 3));
 }
};

module.exports = calculator;
