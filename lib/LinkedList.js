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
    } //else {
  //     var curr = this.head;
  //     while(curr.next) {
  //       curr = curr.next;
  //       this.length++;
  //     }
  //     curr.next = node;
  //   }
  } else {
    throw error;
  }
  // return this; // return the list with the new node
};

/**
 * Returns the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 * @return {Node}       The Node object.
 */
LinkedList.prototype.get = function (index) {

};

/**
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {

};
