// 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

// DFS preorder iterative 
// 在这种情况下需要用 stack 来模仿那个递归stack的使用情况
// 在一个stack中存在 node和层数

var maxDepth = function(root) {
    let stack = [];
    if (root === null) return 0;
    let maxLen = 1;
    stack.push([root, maxLen])
    while (stack.length !== 0) {
        let topEle = stack.pop();
        let node = topEle[0];
        let len = topEle[1];
        if (node !== null) {
            maxLen = Math.max(maxLen, len);
            stack.push([node.right, len + 1])
            stack.push([node.left, len + 1])
        }
    }
    return maxLen;
};



// BFS
// 宽度优先得使用queue的结构
// 一层一层的遍历
// 先来遍历第一层 然后把他的子元素推入queue中
// 依此类推
// var maxDepth = function(root) {
//     let queue = [];
//     let maxLen = 0;
//     if (root !== null) 
//         queue.push(root);  
//     while (queue.length !== 0) {
//         let len = queue.length;
//         for (let i = 0; i < len; i++) {
//             let topEle = queue.shift();
//             if (topEle.left !== null)
//                 queue.push(topEle.left);
//             if (topEle.right !== null)
//                 queue.push(topEle.right);
//         }
//         maxLen++;
//     }
//     return maxLen;
// };


// DFS recursive root left right 
// preorder 
// var maxDepth = function(root) {
//     if (root === null) return 0;
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };


let root = [3,9,20,null,null,15,7];
let root1 = [1,null,2];
console.log(maxDepth(root));
console.log(maxDepth(root1));