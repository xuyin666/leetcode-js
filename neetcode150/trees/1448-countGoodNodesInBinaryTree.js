// 1448. Count Good Nodes in Binary Tree
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.



//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    if (root === null)
        return 0;
    let res = 0;
    let dfs = function(node, maxValue) {
        if (node === null)
            return;
        if (maxValue <= node.val) 
            res += 1;
        maxValue = Math.max(maxValue, node.val);
        dfs(node.left, maxValue);
        dfs(node.right, maxValue);
    }
    dfs(root, root.val)
    return res;
};

// 我的思路 
// 用dfs 把 当前path的所有值都加入进去，
// 在比较当前值和path里面的值
// var goodNodes = function(root) {
//     if (root === null)
//         return 0;
//     let path = [];
//     path.push(root.val);
//     let res = 0;
//     let dfs = function(node) {
//         if (node === null)
//             return;
//         if (Math.max(...path) <= node.val) {
//             res += 1;
//         }
//         path.push(node.val);
//         dfs(node.left);
//         dfs(node.right);
//         path.pop(node.val);
//     }
//     dfs(root)
//     return res;
// };


let root = [3,1,4,3,null,1,5];
let root1 = [3,3,null,4,2];
let root2 = [1];
console.log(goodNodes(root));
console.log(goodNodes(root1));
console.log(goodNodes(root2));
