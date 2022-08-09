// 133. Clone Graph
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    
};

let adjList = [[2,4],[1,3],[2,4],[1,3]];
let adjList1 = [[]];
let adjList2 = [];
console.log(cloneGraph(adjList));
console.log(cloneGraph(adjList1));
console.log(cloneGraph(adjList2));
