class nodeClassPractice {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
// c.right = g;
// d.left = h;

const depthFirst = (root) => {
    if(root === null) {
        return [];
    }
    const leftValues = depthFirst(root.left);
    const rightValues = depthFirst(root.right);
    return  [ root.value, ...leftValues, ...rightValues ];
};