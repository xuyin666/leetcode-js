// 199. Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // bfs
    // get the first elem of the queue 
    let queue = [];
    let res = [];
    queue.push(root)
    while (queue.length !== 0) {
        let len = queue.length;
        let lastElem;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node) {
                queue.push(node.left);
                queue.push(node.right);
                lastElem = node.val;
            }
        }
        if (lastElem !== undefined)
            res.push(lastElem);
    }
    return res;
};

let root = [1,2,3,null,5,null,4];
let root1 = [1,null,3];
let root2 = [];
console.log(rightSideView(root));
console.log(rightSideView(root1));
console.log(rightSideView(root2));
