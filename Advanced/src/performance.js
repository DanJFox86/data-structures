var newStack = new Stack()
var newQueue = new Queue()

for(var i = 0; i < 100000; i++) {
  newQueue.enqueue(Math.floor(100*Math.random()));
}
// newStack.push(1);
// newStack.push(2);
// newStack.push(3);


$(document).ready(function(){
    
  $('#sq').text(JSON.stringify(newQueue.storage))
  
  
})