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

    // 这个函数返回一个数组，是否为balanced 以及 最大高度
    let dfs = function(node) {
        if (node === null) {
            return [true, 0];
        }
        let leftNode = dfs(node.left);
        let rightNode = dfs(node.right);
        let isValid = (Math.abs(leftNode[1] - rightNode[1]) <= 1) && 
                        (leftNode[0]) && (rightNode[0]);
        let maxHeight = 1 + Math.max(leftNode[1], rightNode[1]);
        return [isValid, maxHeight];
    }

    let res = dfs(root);
    return res[0];
};

let root = [3,9,20,null,null,15,7];
let root1 = [1,2,2,3,3,null,null,4,4];
let root2 = [];
console.log(isBalanced(root));
console.log(isBalanced(root1));
console.log(isBalanced(root2));
