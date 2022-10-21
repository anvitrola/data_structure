/**
 * What methods should a linked list have?
 * Add node, get node, remove node,
 *
 * We should also be able to know the linked list size
 *
 *
 * When adding a node, should we be able to add it in the midle of the list?
 */

function LinkedList() {
  let firstNode = null;
  let lastNode = null;
  let size = 0;

  //default insertion is at the last position
  function insert(value) {
    const newNode = node(value);

    //is the linked-list empty?
    if (size === 0) {
      //if yes, make this new node my first and my last node
      firstNode = newNode;
      lastNode = newNode;

      return size++;
    }

    //linking our new node to the last node by setting it as new node's previousNode prop
    newNode.previousNode = lastNode;
    //linking last node nextNode property to the node we just added
    last.nextNode = newNode;

    //now, last node will be our recently added node
    lastNode = newNode;

    //increase linked list size
    size++;
  }

  function insertAt() {}

  function remove() {}

  function getNode() {}

  function length() {
    return size;
  }

  function printList() {}

  function node(value) {
    let previousNode = null;
    let nextNode = null;

    function getValue() {
      return value;
    }

    return {
      insert,
      getValue,
      previousNode,
      nextNode,
    };
  }

  return {
    insertAt,
    insert,
    remove,
    getNode,
    length,
  };
}

module.exports = LinkedList;

//export { LinkedList };
