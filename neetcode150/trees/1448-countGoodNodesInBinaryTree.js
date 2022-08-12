// 1448. Count Good Nodes in Binary Tree
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    
};

let root = [3,1,4,3,null,1,5];
let root1 = [3,3,null,4,2];
let root2 = [1];
console.log(goodNodes(root));
console.log(goodNodes(root1));
console.log(goodNodes(root2));
