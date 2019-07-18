var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.first = 0;
  queue.last = 0;
  return queue;
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
      this.first++;
    }
    return dequeued;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


