var LinkedList = require('./LinkedList');
var Node = require('./Node');
module.exports = Queue;

function Queue() {
  // call parent super constructor method
  LinkedList.call(this);
}

// TODO: Extend LinkedList
// Queue.prototype = new LinkedList();

Queue.prototype = Object.create(LinkedList.prototype, {
  constructor: {value: LinkedList}
});

/**
 * Enqueues the value at the beginning of the queue
 * @param  value The value to add to the queue
 */
Queue.prototype.enqueue = function (value) {
  var newNode = new Node(value);
  this.add(newNode);
};

/**
 * Dequeues the value at the end of the queue
 * @throws {Error} – Thrown when the queue is empty
 * @return The value at the end of the queue
 */
Queue.prototype.dequeue = function () {
  if(this.length === 0) {
    throw new Error();
  } else {
    return this.remove(0).value;
  }
};
