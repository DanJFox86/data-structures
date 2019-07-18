var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };
  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      var dequeued = storage[first];
      delete storage[first];
      first += 1;
    }
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};
