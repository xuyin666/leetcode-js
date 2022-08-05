// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


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
var isValidBST = function(root) {
    return valid(root, Number.NEGATIVE_INFINITY, Number.MAX_VALUE);
};

let valid = function(root, left, right) {
    if (root === null) return true;
    if (root.val > left && root.val < right)
        return (valid(root.left, left, root.val) &&
                valid(root.right, root.val, right))
    return false;
}

// IMPORTANT: 0 > Numberic.MIN_VALUE

// 这道题的思路是限制区间 最开始的root的区间是 -inf ~ +inf
// root.right 的区间是 -inf ~ root.val
// root.left 的区间好似 root.val ~ +inf
// 逐渐往下推 确认每个node都在区间内

let root = [2,1,3];
let root1 = [5,1,4,null,null,3,6];
console.log(isValidBST(root));
console.log(isValidBST(root1));
