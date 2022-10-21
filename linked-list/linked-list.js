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
    const newNode = Node(value);

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
    lastNode.nextNode = newNode;

    //now, last node will be our recently added node
    lastNode = newNode;

    //increase linked list size
    size++;
  }

  //to-do
  function insertAt(value, position) {
  }

  function remove(value) {
    const nodeToRemove = getNode(value);

    if (nodeToRemove === null)
      return new Error("Impossible to remove null element");

    if (nodeToRemove.previousNode !== null) {
      nodeToRemove.previousNode.nextNode = nodeToRemove.nextNode;
    }

    if (nodeToRemove.nextNode !== null) {
      nodeToRemove.nextNode.previousNode = nodeToRemove.previousNode;
    }

    size--;
  }

  function getNode(value) {
    if (firstNode === null) return;

    for (let i = 0, node = firstNode; i < size; i++, node = node.nextNode) {
      if (node.getValue() == value) return node;
    }

    return null;
  }

  function length() {
    return size;
  }

  function printList() {
    const list = [];

    for (let i = 0, node = firstNode; i < size; i++, node = node.nextNode) {
      list.push(node.getValue());
    }

    return list;
  }

  function Node(value) {
    let previousNode = null;
    let nextNode = null;

    function getValue() {
      return value;
    }

    return {
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
    printList,
  };
}

module.exports = LinkedList;

//export { LinkedList };
