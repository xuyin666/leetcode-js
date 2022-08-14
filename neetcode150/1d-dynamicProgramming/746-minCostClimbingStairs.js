// 746. Min Cost Climbing Stairs
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) { 
    // 往数组内加一个elem，为0
    cost.push(0);
    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] = cost[i] + Math.min(cost[i + 1], cost[i + 2]);
    }
    return Math.min(cost[0], cost[1]);
}


// var minCostClimbingStairs = function(cost) {
//     let len = cost.length;
//     let dp = new Array(len).fill(cost[len - 1]);
//     dp[len - 2] = cost[len - 2];
//     for (let i = len - 3; i >= 0; i--) {
//         dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
//     }
//     return Math.min(dp[0], dp[1]);
// };

let cost = [10,15,20];
let cost1 = [1,100,1,1,1,100,1,1,100,1];
console.log(minCostClimbingStairs(cost));
console.log(minCostClimbingStairs(cost1));