var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);
  newTree.children = []; // fix me

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



/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 
//AddChild - O(1)
//contains - O(n) 
