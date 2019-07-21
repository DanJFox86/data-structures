var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);
  newTree.children = []; // fix me
  newTree.parent = null;
  return newTree;
};

var extend = function(obj, methods) {
  var keys = Object.keys(methods);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    obj[keys[i]] = methods[keys[i]];

  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
  
};

treeMethods.contains = function(target) {
  
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      var result = this.children[i].contains(target);
      if (result) {
        return true;
      }
    }
  }
  return false;

};


treeMethods.removeFromParent = function () {
  
  for(var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
  for(var i = 0; i < this.children.length; i++) {
    if (this.children[i] === this.parent) {
      this.children.splice(i, 1);
    }
  }
}

/*

 A .parent property, which refers to the parent node or null when there is no node
 A .removeFromParent() method, which disassociates the tree with its parent (in both directions)

*/


/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 
//AddChild - O(1)
//contains - O(n) 
