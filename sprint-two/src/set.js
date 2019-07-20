var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = new HashTable(); // fix me
  set.key = 1;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.insert(item, this.key);
  this.key += 1;
  
  // if(!this._storage.includes(item)) {
  //   this._storage.push(item);
  // }
};

setPrototype.contains = function(item) {
  
  if (this._storage.retrieve(item)) {
    return true;
  }
  // if (this._storage.indexOf(item) >= 0) {
  //   return true;
  // }
  return false;
};

setPrototype.remove = function(item) {
  // for(var i = 0; i < this._storage.length; i++) {
  //   if(this._storage[i] === item) {
  //     this._storage.splice(i,1);
  //   }
  // }
  
  this._storage.remove(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 - Add: O(1)
 - Contains: O(1)
 - Remove: O(1)
 */
