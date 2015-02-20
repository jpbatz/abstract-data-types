var crypto = require('crypto');
module.exports = Map;

// For advanced students.
var LinkedList = require('./LinkedList');
var Node = require('./Node');

var MAP_CAPACITY = 100;


/**
 * A simple map implementation that uses an array for storage.
 * @property storage – An array where we will store the data.
 */
function Map() {
  this.storage = [];
}

/**
 * Set the value at the provided key.
 * If you're doing the advanced tests, you will probably need a LinkedList.
 * Also, if you're doing the advanced tests, you will probably want to store
 * both the key and the value for the get implementation.
 * @param key – The key for the item we are storing.
 * @param value - The value that we are associating with the key.
 */
Map.prototype.set = function(key, value) {
  if(value === null) {
    return null;
  } else {
    var obj_value = {
      "obj_key": key,
      "obj_value": value
    };
    if(this.storage[this._hashFunction(key)] === undefined) {
      this.storage[this._hashFunction(key)] = new LinkedList();
      this.storage[this._hashFunction(key)].add(new Node(obj_value));
    } else {
      // this.storage[Map.prototype._hashFunction(key)] = obj_value;
      if(this.storage[this._hashFunction(key)].head.value.obj_key === key) {
        // should traverse the list
        this.storage[this._hashFunction(key)].head.value.obj_value = value;
      } else {
        this.storage[this._hashFunction(key)].add(new Node(obj_value));
      }
    }
  }
};

/**
 * Get the value at the provided key.
 * If you're doing the advanced tests, you need to find the item matching your
 * key.
 * @param key – The key for the item.
 * @return The value associated with the key or null if it does not exist.
 */
Map.prototype.get = function(key) {
  // var value = Map.prototype.storage[this._hashFunction(key)];
  var curr_list = this.storage[this._hashFunction(key)];
  if(curr_list === undefined) {
    return null;
  } else {
    var curr_node = this.storage[this._hashFunction(key)].head;
    var found = false;
    while(!found) {
      if(curr_node.value.obj_key === key) {
        found = true;
        return curr_node.value.obj_value;
      }
      if(curr_node.next === null) {
        return null;
      } else {
        curr_node = curr_node.next;
      }
    }
  }
};

/**
 * Remove the value at the provided key.
 * If you're doing the advanced tests, you need to find the item matching your
 * key.
 * @param key – The key for the item we are removing.
 * @throws Error if the key does not map to a value.
 * @return The value associated with the key.
 */
Map.prototype.remove = function(key) {
  // var value = Map.prototype.storage[this._hashFunction(key)];
  var curr_list = this.storage[this._hashFunction(key)];
  console.log(curr_list);
  if(curr_list === undefined) {
    return null;
  } else {
    // Map.prototype.storage[this._hashFunction(key)] = null;
    var curr_node = this.storage[this._hashFunction(key)].head;
    var curr_value = curr_node.value.obj_value;
    var found = false;
    while(!found) {
      if(curr_node.value.obj_key === key) {
        found = true;
        curr_node.value.obj_value = null;
        return curr_node.value.obj_value;
      }
      if(curr_node.next === null) {
        return null;
      } else {
        curr_node = curr_node.next;
      }
    }
  }
};


/**
 * Helper function for computing an array index with a key.
 * Note, this should not be public, but it's public so I can stub it.
 * @param key - The key for the map
 * @return An array index to be used to insert into an array.
 */
Map.prototype._hashFunction = function(key) {
  // No need to be fancy. This isn't a password
  var shasum = crypto.createHash('md5');
  shasum.update(key.toString());
  return parseInt(shasum.digest('hex'), 16) % MAP_CAPACITY;
};
