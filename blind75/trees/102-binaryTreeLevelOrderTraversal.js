// 102. Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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
 * @return {number[][]}
 */

// Breath Frist Search
// use a queue
var levelOrder = function(root) {
    let queue = [];
    let res = [];
    if (root === null) return res;
    queue.push(root);
    while (queue.length !== 0) {
        let len = queue.length;
        let levelNode = [];
        for (let i = 0; i < len; i++) {
            let topEle = queue.shift();
            levelNode.push(topEle.val);
            if (topEle.left !== null) 
                queue.push(topEle.left);
            if (topEle.right !== null)
                queue.push(topEle.right);
        }
        res.push(levelNode);
    }
    return res;
};

let root = [3,9,20,null,null,15,7];
let root1 = [1];
let root2 = [];
console.log(levelOrder(root));
console.log(levelOrder(root1));
console.log(levelOrder(root2));
