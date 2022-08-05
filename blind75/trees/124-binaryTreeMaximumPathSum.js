// 124. Binary Tree Maximum Path Sum
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
// The path sum of a path is the sum of the node's values in the path.
// Given the root of a binary tree, return the maximum path sum of any non-empty path.


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
var maxPathSum = function(root) {
    let res = [root.val]
    let dfs = function(root) {
        if (root === null) return 0;
        // the max value without splitting
        let leftVal=  dfs(root.left);
        let rightVal = dfs(root.right);
        // if leftVal < 0 || rightVal < 0, we will not add them 
        leftVal = Math.max(leftVal, 0);
        rightVal = Math.max(rightVal, 0);
        res[0] = Math.max(leftVal + rightVal + root.val, res[0]);
        return root.val + Math.max(leftVal, rightVal);
    }
    dfs(root);
    return res[0];
};

// 这道题思路是dfs 然后 讨论两种情况
// split 或者 不split
// split 必须是同一个方向的
// 不split的意思是带着root

let root = [1,2,3];
let root1 = [-10,9,20,null,null,15,7];
console.log(maxPathSum(root));
console.log(maxPathSum(root1));
