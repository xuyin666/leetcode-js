// 684. Redundant Connection
// In this problem, a tree is an undirected graph that is connected and has no cycles.
// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    // 这道题的思路是 union and find（）
    // 一旦发现 union返回的是false则 这证明已经被连接了
    // 则代表需要返回当前的edge

    let parent = new Array(edges.length + 1)
    let rank = new Array(edges.length + 1).fill(1)
    for (let i = 0; i <= edges.length; i++) {
        parent[i] = i;
    }

    let find = function(node) {
        let curr = node;
        while (curr !== parent[curr]) {
            parent[curr] = parent[parent[curr]];
            curr = parent[curr];
        }
        return curr;
    }

    let union = function(node1, node2) {
        let par1 = find(node1);
        let par2 = find(node2);
        if (par1 === par2) return false;
        if (rank[par1] > rank[par2]) {
            rank[par1] = rank[par1] + rank[par2];
            parent[par2] = par1;
        } else {
            rank[par2] = rank[par2] + rank[par1];
            parent[par1] = par2;
        }
        return true;
    }

    for (let edge of edges) {
        if (!union(edge[0], edge[1]))
            return edge;
    }
};

let edges = [[1,2],[1,3],[2,3]];
let edges1 = [[1,2],[2,3],[3,4],[1,4],[1,5]];

console.log(findRedundantConnection(edges));
console.log(findRedundantConnection(edges1));
