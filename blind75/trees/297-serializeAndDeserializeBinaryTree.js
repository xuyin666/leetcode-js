// 297. Serialize and Deserialize Binary Tree
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// 我们可以用 dfs preorder来遍历 然后遇到null，储存一个n，不然的话直接存值
var serialize = function(root) {
    let arr = [];
    let dfs = function(root) {
        if (root === null) 
            arr.push('N')
        else {
            arr.push('' + root.val)
            dfs(root.left)
            dfs(root.right)
        }
    }
    dfs(root);
    return arr.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// 可以用一个全局变量i 来代表 在当前数组的位置
// 因为 当一个子节点结束时，我们在之前的serialize中用N来代替了
// 所以不会有模凌两可的情况
var deserialize = function(data) {
    let arr = data.split(',');
    let i = 0;
    let dfs = function(arr) {
        if (arr[i] === 'N') {
            i++;
            return null;
        }
        let root = new TreeNode(arr[i]);
        i++;
        let leftTree = dfs(arr);
        let rightTree = dfs(arr);
        root.left = leftTree;
        root.right = rightTree;
        return root;
    }
    let rootElem = dfs(arr);
    return rootElem;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let root = [1,2,3,null,null,4,5];
let root1 = [];
console.log(deserialize(serialize(root)));
console.log(deserialize(serialize(root1)));
