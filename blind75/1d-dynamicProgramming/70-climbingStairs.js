// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let res = 1,    // dp[i - 2] start with index 0
        res1 = 1;   // dp[i - 1] start with index 1
    let allWays = 0;
    if (n === 1) return 1;
    for (let i = 2; i <= n; i++) {
        allWays = res + res1;
        res = res1;
        res1 = allWays
    }
    return allWays;
};

// 这道题的思路是动态规划
// 一个人需要爬n层楼，一次可以跳一层或者两层
// 所以比如说 到达n层楼的可能性 只能是 从n - 1过来(需要跳一层)， 或者n - 2(需要跳两层)
// 所以我们可以得到方程 dp[i] = dp[i - 1] + dp[i - 2] dp[n]代表从起始点调到n的总方法数

console.log(climbStairs(2));  // n = 2
console.log(climbStairs(3));  // n = 3