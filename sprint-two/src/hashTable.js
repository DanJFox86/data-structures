

var HashTable = function() {
  this._limit = 8;
  this._occupied = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keys = [];
  
  if(this._storage[index]) {
    for(var i = 0; i < this._storage[index].length; i++) {
      keys.push(this._storage[index][i][0]);
    }
    
    if(keys.includes(k)) {
      this._storage[index][keys.indexOf(k)][1] = v;
    } else {
      this._storage[index].push([k,v]);
    }
    
  } else {
    this._storage[index] = [[k,v]];
    this._occupied++;
    // if (this._occupied > this._limit * .75) {
    //   console.log("resizing array");
    //   this._storage = this._storage.rehashLarger(this._limit);
    //   this._limit *= 2;
    // }
    // if (this._occupied < this._limit * .25) {
    //   this._storage = this._storage.rehashSmaller(this._limit);
    //   this._limit /= 2;
    // }
  }
  console.log(JSON.stringify(this._storage));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  for(var i = 0; i < this._storage[index].length; i++) {
    if(this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
    for(var i = 0; i < this._storage[index].length; i++) {
    if(this._storage[index][i][0] === k) {
      this._storage[index].splice(i,1);
    }
  }
};



/*

To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled

To save space, make sure the hashTable halves in size when space usage falls below 25 percent

*/

/*
 * Complexity: What is the time complexity of the above functions?
  - Insert: O(1)
  - Retrieve: O(1)
  - Remove: O(1)
 
 */


