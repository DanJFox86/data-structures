describe('linkListDouble', function() {
  var linkListDouble;

  beforeEach(function() {
    linkListDouble = DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkListDouble).to.have.property('head');
    expect(linkListDouble).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeTail", removeHead", and "contains"', function() {
    expect(linkListDouble.addToTail).to.be.a('function');
    expect(linkListDouble.removeHead).to.be.a('function');
    expect(linkListDouble.addToHead).to.be.a('function');
    expect(linkListDouble.removeTail).to.be.a('function');
    expect(linkListDouble.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkListDouble.addToTail(4);
    expect(linkListDouble.tail.value).to.equal(4);
    linkListDouble.addToTail(5);
    expect(linkListDouble.tail.value).to.equal(5);
  });
  
  it('should designate a new head when new nodes are added', function() {
    linkListDouble.addToHead(4);
    expect(linkListDouble.head.value).to.equal(4);
    linkListDouble.addToHead(5);
    expect(linkListDouble.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkListDouble.addToTail(4);
    linkListDouble.addToTail(5);
    expect(linkListDouble.head.value).to.equal(4);
    linkListDouble.removeHead();
    expect(linkListDouble.head.value).to.equal(5);
  });
  
  
  
  it('should remove the tail from the list when removeTail is called', function() {
    linkListDouble.addToTail(4);
    linkListDouble.addToTail(5);
    expect(linkListDouble.tail.value).to.equal(5);
    linkListDouble.removeTail();
    expect(linkListDouble.tail.value).to.equal(4);
  });
  
  it('removes reference to old tail when removeTail is called', function() {
    linkListDouble.addToTail(4);
    linkListDouble.addToTail(5);
    linkListDouble.addToTail(5);
    expect(linkListDouble.tail.value).to.equal(5);
    linkListDouble.removeTail();
    expect(linkListDouble.tail.next).to.equal(null);
  });
  
  it('removes reference to old head when removeHead is called', function() {
    linkListDouble.addToHead(4);
    linkListDouble.addToHead(5);
    expect(linkListDouble.head.value).to.equal(5);
    linkListDouble.removeHead();
    expect(linkListDouble.head.previous).to.equal(null);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkListDouble.addToTail(4);
    linkListDouble.addToTail(6);
    linkListDouble.addToTail(65);
    linkListDouble.addToTail(7);
    expect(linkListDouble.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkListDouble.addToTail(4);
    linkListDouble.addToTail(5);
    linkListDouble.addToHead(6);
    linkListDouble.addToHead(7);
    expect(linkListDouble.contains(4)).to.equal(true);
    expect(linkListDouble.contains(5)).to.equal(true);
    expect(linkListDouble.contains(6)).to.equal(true);
    expect(linkListDouble.contains(7)).to.equal(true);
    expect(linkListDouble.contains(8)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkListDouble.addToTail(4);
    linkListDouble.addToTail(5);
    linkListDouble.removeHead();
    expect(linkListDouble.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkListDouble
  
  it('expect adding undefined to the linkListDouble and be able to find it', function() {
    linkListDouble.addToTail();
    expect(linkListDouble.contains()).to.equal(true);
  });
});
