var LinkedList = function() {
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
    
    if(!list.tail){
      
      list.tail = node;
      list.head = node;
    
    }else{
      
      list.tail.next = node;
      list.tail = node;
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
    
    if(!list.head){
      
      return {}
    
    }else{
      
      let pop = list.head.value;
      list.head = list.head.next;
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
      if(node.value === target){
        return true;
        
      }else{
        
        if(node.next !== null){
          return move(node.next)
        }else{
          return false;
        }
      }
    }
    
    if(!list.head){
      return false;
    }else{
      return move(list.head);
    }
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};