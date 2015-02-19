var LinkedList = require('./LinkedList');
var Node = require('./Node');
module.exports = Stack;

function Stack() {}

// TODO: Extend LinkedList
Stack.prototype = new LinkedList();


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
    console.log("[1]" + this.length);
  if(this.head === null) {
    throw new Error();
  } else {
    var removedNode = this.remove(this.length-1);
    console.log("[2]" + this.length);
    return removedNode.value;
  }
};

/**
 * Peek at the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.peek = function () {

};
