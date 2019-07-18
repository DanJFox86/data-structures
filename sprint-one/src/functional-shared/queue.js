var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = 0;

  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(obj, methods) {
  var keys = Object.keys(methods);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    obj[keys[i]] = methods[keys[i]];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },
  dequeue: function() {
    if (this.size() > 0) {
      var dequeued = this.storage[this.first];
      delete this.storage[this.first];
      this.first += 1;
    }
    return dequeued;
  }, 
  size: function() {
    return Object.keys(this.storage).length;
  }
};


