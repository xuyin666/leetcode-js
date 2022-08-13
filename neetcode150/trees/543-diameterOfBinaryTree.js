// 543. Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

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
var diameterOfBinaryTree = function(root) {
    // 这道题的思路是得知道 当node为null时，高度为-1
    // res = 经过这点的最大值 with split
    let res = 0;
     
    // 不split node时height的最大值
    let dfs = function(node) {
        if (node === null) return -1;
        let leftPath = dfs(node.left);
        let rightPath = dfs(node.right);
        res = Math.max(res, 2 + leftPath + rightPath);
        return 1 + Math.max(leftPath, rightPath);
    }

    dfs(root);
    return res;

};




let root = [1,2,3,4,5];
let root1 = [1,2];
console.log(diameterOfBinaryTree(root));
console.log(diameterOfBinaryTree(root1));
