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
  // removes head
  if(index === 0) {
    this.head = this.head.next;
    this.length--;
  }
  // removes mid node
  if(index >= 1) {
    var curr_node = this.head.next; // getNext()?
    var prev_node = this.head;
    var curr_index = 1;
    var prev_index = 0;
    var found = false;
    while(!found) {
      if(curr_index === index) {  // found specified node
        if(curr_node.next === null) { // removes last node
          found = true;
          prev_node.next = null;
          this.length--;
          return;
        }
        found = true;  // removes mid node
        prev_node.next = curr_node.getNext();
        this.length--;
        return;
      }
      curr_node = curr_node.getNext();
      curr_index++;
      prev_index++;
    }
  }
};
