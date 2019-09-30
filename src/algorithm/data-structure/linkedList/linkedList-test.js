let arr = [1, 2, 3];
let linkedList = new LinkedList();

arr.forEach(num => linkedList.append(num));

// console.log(linkedList);

console.log(reverseList(linkedList.head))