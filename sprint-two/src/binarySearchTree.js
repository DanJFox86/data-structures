var BinarySearchTree = function(value) {
  var bst = Object.create(BSTprototype);
  
  bst.value = value;
  bst.left = null;
  bst.right = null;
  
  return bst;
};

var BSTprototype = {}

BSTprototype.insert = function(value) {
  //var newNode = BinarySearchTree(value);
  
  if (this.value <= value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  
};

BSTprototype.contains = function(value) {
  
  if (this.value === value) {
    return true;
  } else if (this.value <= value) {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }
  
};

BSTprototype.depthFirstLog = function(cb) {
  
    // this.call(this,cb);
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  

};


/*
 * Complexity: What is the time complexity of the above functions?
 
 insert - O(logn)
 contains - O(logn)
 depthFirstLog - O(n)
 
 */
