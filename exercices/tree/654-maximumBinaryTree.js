// 654. Maximum Binary Tree
// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:
// Create a root node whose value is the maximum value in nums.
// Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let dfs = function(left, right) {
        if (left > right) return null;
        if (left === right) return new TreeNode(nums[left]);
        let max = Math.max(...nums.slice(left, right + 1));
        let indexMax = nums.indexOf(max);
        let root = new TreeNode(max);
        let leftNode = dfs(left, indexMax - 1);
        let rightNode = dfs(indexMax + 1, right);
        root.left = leftNode;
        root.right = rightNode;
        return root;
    }
    return dfs(0, nums.length - 1);
};

// Input: nums = [3,2,1,6,0,5]
// Output: [6,3,5,null,2,0,null,null,1]

// Input: nums = [3,2,1]
// Output: [3,null,2,null,1]