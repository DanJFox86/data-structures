

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  
  var newNode = {};
  newNode.value = value;
  newNode.edges = [];
  
  this.storage.push(newNode);
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  for (var i = 0; i < this.storage.length; i++ ) {
    if (this.storage[i].value === target) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  
  for (var i = 0; i < this.storage.length; i++ ) {
    this.removeEdge(target, this.storage[i].value);
    if (this.storage[i].value === target) {
      this.storage.splice(i, 1);
    }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var from;
  var to;
  for (var i = 0; i < this.storage.length; i++ ) {
    if (this.storage[i].value === fromNode) {
      for(var j = 0; j < this.storage[i].edges.length; j++) {
        if (this.storage[i].edges[j].value === toNode) {
          from = true;
        }
      }
    }
    if (this.storage[i].value === toNode) {
      for(var j = 0; j < this.storage[i].edges.length; j++) {
        if (this.storage[i].edges[j].value === fromNode) {
          to = true;
        }
      }
    }
  }
  
  if (from || to) {
    return true;
  }
  return false;
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var from;
  var to;
  for (var i = 0; i < this.storage.length; i++ ) {
    if (this.storage[i].value === fromNode) {
      from = this.storage[i];
    }
    if (this.storage[i].value === toNode) {
      to = this.storage[i];
    }
  }
  
  
  if (from && to) {
    from.edges.push(to);
    to.edges.push(from);
  }
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  for (var i = 0; i < this.storage.length; i++ ) {
    if (this.storage[i].value === fromNode) {
      for(var j = 0; j < this.storage[i].edges.length; j++) {
        if (this.storage[i].edges[j].value === toNode) {
          // this.storage[i].edges.splice(j,1)
          for(var k = 0; k < this.storage[i].edges[j].edges.length; k++) {
            if (this.storage[i].edges[j].edges[k].value === fromNode) {
              this.storage[i].edges[j].edges.splice(k,1);
            }
          }
          this.storage[i].edges.splice(j,1);
        }
      }
    }
  }
  
  
};


// var connectToFive = function(item) {
//   graph.addEdge(item, 5);
// };
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  
  for(var i = 0 ; i < this.storage.length ; i++) {
    cb(this.storage[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 addNode - O(1)
 contains - O(n)
 removeNode - O(n^4)
 hasEdge - O(n^2)
 addEdge - O(n^2)
 removeEdge - O(n^3)
 forEachNode - O(n)
 
 */


var graph = new Graph();