// 261 Graph Valid Tree
// 给定编号从 0 到 n - 1 的 n 个结点。给定一个整数 n 和一个 edges 列表，其中 edges[i] = [ai, bi] 表示图中节点 ai 和 bi 之间存在一条无向边。
// 如果这些边能够形成一个合法有效的树结构，则返回 true ，否则返回 false 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {

};

let n = 5, edges = [[0,1],[0,2],[0,3],[1,4]];
let n1 = 5, edges1 = [[0,1],[1,2],[2,3],[1,3],[1,4]];
console.log(validTree(n, edges));
console.log(validTree(n1, edges1));
