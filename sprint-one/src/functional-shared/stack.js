var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};

  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(obj, methods) {
  var keys = Object.keys(methods);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    obj[keys[i]] = methods[keys[i]];

  }
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },  
  pop: function () {
    var length = this.size();
    if (length > 0) {
      var popped = this.storage[length - 1];
      delete this.storage[length - 1];
    }
    return popped;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};


