// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};


// 这道题思路用递归
// 到了null 则返回null
// 不然的话 先颠倒左右分支
// 然后再用同样的函数对于左右分支

let root = [4,2,7,1,3,6,9];
let root1 = [2,1,3];
let root2 = []
console.log(invertTree(root));
console.log(invertTree(root1));
console.log(invertTree(root2));
