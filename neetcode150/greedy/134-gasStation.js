// 134. Gas Station
// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sumGas = gas.reduce((partialSum, a) => partialSum + a, 0);
    let sumCost = cost.reduce((partialSum, a) => partialSum + a, 0);
    if (sumGas < sumCost) return -1;
    let len = gas.length;
    let toatlCost = 0;
    let start = 0;
    for (let i = 0; i < len; i++) {
        toatlCost = toatlCost + gas[i] - cost[i];
        if (toatlCost < 0) {
            start = i + 1;
            toatlCost = 0;
        }
    }
    return start;
};


// 这道题思路是用贪心算法
// 如果加油站的油 少于 消耗的油，则无论怎么样都不可能转一圈
// 如果加油站的油 多于 消耗的油， 那它一定可以转一圈 且这个题存在着有且唯一的解
// 首先 我们得计算出 totalCost = gas[i] - cost[i]
// 如果这个totalCost 是负数 证明 当前的i 或者以前的i 都适合做出发点
// 如果它为负数，则将start 往后移

let gas = [1,2,3,4,5], cost = [3,4,5,1,2];
let gas1 = [2,3,4], cost1 = [3,4,3];
console.log(canCompleteCircuit(gas, cost));
console.log(canCompleteCircuit(gas1, cost1));
