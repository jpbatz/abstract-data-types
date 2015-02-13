var Node = require('./Node');

module.exports = LinkedList;

/**
 * A collection of Node objects.
 * @property {Node} head – The first Node object, defaults to `null`.
 * @property {Number} length - The length of the LinkedList, defaults to 0.
 */
function LinkedList () {
  this.head = null;
  this.length = 0;
}

/**
 * Appends the Node object to the end of the linked list.
 * @param  {[type]} node [description]
 * @throws {TypeError} – Should only accept other Node objects.
 * @return {[LinkedList]}      [description]
 */
LinkedList.prototype.add = function (node) {
  if( node instanceof Node ) {
    if(this.head === null) {
      this.head = node;
      this.length = 1;
    } else {
      var curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = node;
      node.next = null;
      this.length++;
    }
  } else {
    throw error;
  }
  return this; // return the list with the new node
};

/**
 * Returns the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 * @return {Node}       The Node object.
 */
LinkedList.prototype.get = function (index) {
  if(this.head === null) {
    return null;
  }
  if(index === 0) {
    return this.head;
  } else {
    var curr = this.head.next;
    var curr_index = 1;
    var found = false;
    while(!found) {
      if(curr_index === index) {
        console.log("found at " + curr_index);
        found = true;
        return curr;
      } else {
        console.log("not found at " + curr_index);
        curr = curr.getNext();
      }
    }
  }
};

/**
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {
  if(this.head === null) {
    return;
  }
  // removing head
  if(index === 0) {
    this.head = this.head.next;
    this.length--;
  }
  // removing mid node
  // removing last node

  // this.length--;
};
