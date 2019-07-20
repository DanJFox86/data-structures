var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    /*
    Add 
      - add node to list
      - set node.value to 'value'
      - set next property of list.tail to current node 
      - update list.tail to current node
      - If list is empty, set list.node to list.head 
    */
    
    let node = new Node(value);
    node.value = value;
    
    if (!list.tail) {
      
      list.tail = node;
      list.head = node;
    
    } else {
      
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;
    }
    
  };
  
  list.addToHead = function(value) {
    /*
    Add 
      - add node to list
      - set node.value to 'value'
      - set next property of list.tail to current node 
      - update list.tail to current node
      - If list is empty, set list.node to list.head 
    */
    
    let node = new Node(value);
    node.value = value;
    
    if (!list.head) {
      
      list.tail = node;
      list.head = node;
    
    } else {
      
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    }
    
  };

  list.removeHead = function() {
    
    /*
    Remove
      - If there is no head return {}
      - If there is head, make next node as head
        - Save our list.head to another var pop
        - Update list.head = list.head.next
        - delete list.head
      - return var pop
    */
    
    if (!list.head) {
      
      return {};
    
    } else {
      
      var pop = list.head.value;
      
      if(list.head.next !== null) {
        list.head = list.head.next;
        list.head.previous = null;
      } else {
        list.head = list.head.next;
        list.tail = null;
      }
      
      return pop;
      
    }
  };
  
  list.removeTail = function() {
    
    /*
    Remove
      - If there is no head return {}
      - If there is head, make next node as head
        - Save our list.head to another var pop
        - Update list.head = list.head.next
        - delete list.head
      - return var pop
    */
    
    if (!list.tail) {
      
      return {};
    
    } else {
      
      var pop = list.tail.value;
      
      if(list.tail.previous !== null) {
        list.tail.previous.next = null;
        list.tail = list.tail.previous;
      } else {
        list.tail = list.tail.previous;
        list.head = null;
      }
      
      
      return pop;
    }
  };

  list.contains = function(target) {
    
    /*
    Contains
      - If head.value = target , return true
      - If head.value !== target and head.next exist, call list.contains on head.next
      - If head.value !== target and head.next === null, return false
    */
    
    var move = function(node) {
      if (node.value === target) {
        return true;
        
      } else {
        
        if (node.next !== null) {
          return move(node.next);
        } else {
          return false;
        }
      }
    };
    
    if (!list.head) {
      return false;
    } else {
      return move(list.head);
    }
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};





/*
  Time Complexity:
  - Add: O(1)
  - Remove: O(1)
  - Contains: O(n)
*/