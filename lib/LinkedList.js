var Node = require('./Node');

module.exports = LinkedList;

/**
 * A collection of Node objects.
 * @property {Node} head – The first Node object, defaults to `null`.
 * @property {Number} length - The length of the LinkedList, defaults to 0.
 */
function LinkedList () {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

/**
 * Appends the Node object to the end of the linked list.
 * @param  {[type]} node [description]
 * @throws {TypeError} – Should only accept other Node objects.
 * @return {[LinkedList]}      [description]
 */
LinkedList.prototype.add = function (node) {
  if( !(node instanceof Node) ) {
    throw new Error();
  } else {
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      var curr = this.head;
      while(curr.getNext()) {
        curr = curr.getNext();
      }
      curr.next = node;
      node.next = null;
      this.tail = curr.getNext();
    }
  }
  this.length++;
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
    var curr = this.head.getNext();
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
  var foundNode;
  if(this.head === null) {
    foundNode = this.head;
    this.tail = null;
    return foundNode;
  }
  // removes head
  if(index === 0) {
    foundNode = this.head;
    this.head = this.head.getNext();
    this.length--;
    return foundNode;
  }
  // removes mid node
  if(index >= 1) {
    var curr_node = this.head.getNext(); // getNext()?
    var prev_node = this.head;
    var curr_index = 1;
    var prev_index = 0;
    var found = false;
    while(!found) {
      if(curr_index === index) {  
        found = true;   // found specified node
        foundNode = curr_node;
        if(curr_node.next === null) { // removes last node
          // found = true;
          prev_node.next = null;
          this.tail = prev_node;
          this.length--;
          return foundNode;  // return node that got removed
        }
        // found = true;  // removes mid node
        prev_node.next = curr_node.getNext();
        this.length--;
        return foundNode;  // return node that got removed
      }
      curr_node = curr_node.getNext();
      curr_index++;
      prev_index++;
    }
  }
};
