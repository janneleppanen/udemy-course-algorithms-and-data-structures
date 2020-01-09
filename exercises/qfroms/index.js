// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.fillStack = new Stack();
    this.removeStack = new Stack();
  }

  add(item) {
    this.fillStack.push(item);
  }

  remove() {
    while (this.fillStack.peek()) {
      this.removeStack.push(this.fillStack.pop());
    }

    const itemToRemove = this.removeStack.pop();

    while (this.removeStack.peek()) {
      this.fillStack.push(this.removeStack.pop());
    }

    return itemToRemove;
  }

  peek() {
    while (this.fillStack.peek()) {
      this.removeStack.push(this.fillStack.pop());
    }

    const itemToPeek = this.removeStack.peek();

    while (this.removeStack.peek()) {
      this.fillStack.push(this.removeStack.pop());
    }

    return itemToPeek;
  }
}

module.exports = Queue;
