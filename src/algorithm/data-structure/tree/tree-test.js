var t = new Tree();
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);
// // t.middleOrder(t.root);
// console.log(t.getMin(), t.getMax());
// // console.log(t.getDeep(t.root, 0));
// // console.log(t.getNode(5,t.root));

// let max = t.getMax();
// console.log('max:', max)

// t.bfc();

// t.laterOrder(t.root)
console.log(t.getDeep(t.root));
