var LinkedList = require('./LinkedList');
var Node = require('./Node');
module.exports = Stack;

function Stack() {
  // call parent super constructor method
  LinkedList.call(this);
}

// TODO: Extend LinkedList
// Stack.prototype = new LinkedList();

Stack.prototype = Object.create(LinkedList.prototype, {
  constructor: {value: LinkedList}
});

/**
 * Pushes the value onto the top of the stack
 * @param  value The value to add to the stack
 */
Stack.prototype.push = function (value) {
  var newNode = new Node(value);
  this.add(newNode);
};

/**
 * Pops the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.pop = function () {
  if(this.head === null) {
    throw new Error();
  } else {
    return this.remove(this.length-1).value;
  }
};

/**
 * Peek at the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.peek = function () {
  if(this.length === 0) {
    throw new Error();
  } else {
    return this.tail.value;
  }
};
