// 110. Balanced Binary Tree

// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
};

let root = [3,9,20,null,null,15,7];
let root1 = [1,2,2,3,3,null,null,4,4];
let root2 = [];
console.log(isBalanced(root));
console.log(isBalanced(root1));
console.log(isBalanced(root2));
