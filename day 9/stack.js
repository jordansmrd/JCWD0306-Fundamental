class Stack {
 #maxSize;
 #container = [];

 constructor(maxSize = 10) {
  this.#maxSize = maxSize;
 }

 #isFull() {
  return this.#container.length >= this.#maxSize;
 }

 #isEmpty() {
  return this.#container.length === 0;
 }

 push(element) {
  //   if (this.#container.length < this.#maxSize) this.#container.push(element);
  if (this.#isFull()) {
   console.log('stack overflow!');
   return;
  }

  this.#container.push(element);
  this.getElements();
 }

 pop() {
  if (this.#isEmpty()) {
   return console.log('stack underflow');
  }
  this.#container.pop();
  this.getElements();
 }
 getElements() {
  return console.log(this.#container);
 }
}

const stack = new Stack(5);

stack.push('apple');
stack.push('mango');
stack.push('grape');
stack.push('orange');
stack.push('melon');
stack.push('watermelon');

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
