
function reverseList(head) {
  let prevNode = null;
  let nextNode = null;
  let currentNode = head;

  while(currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }

  return prevNode;
}