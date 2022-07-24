// 322. Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1);
    for (let i = 1; i <= amount; i++) {
        dp[i] = amount + 1; 
        // dp[i] = Number.MAX_VALUE;
        // 赋值dp[i]为amount+1相当于赋值了一个最大值
        // 比如 amount 需要最多amount个硬币，硬币都是整数
        // dp[i] 绝对不可能大于amount + 1
        // 为什么我没有选择 整数的最大值（Number.MAX_VALUE）
        // 是因为我担心会有溢出问题
    }
    dp[0] = 0; 
    // dp[0] = 0 代表 amount = 0时 需要0个硬币
    // 这是basecase
    for(let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            // 如果i - coin < 0 代表着这个coin太大了 需要跳过
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin])
            }
        }
    }
    if (dp[amount] !== amount + 1)
        return dp[amount];
    else 
        return -1;
}; 


// dp[i] 代表着amount为i，需要coins的最少数量
// dp[i] = math.min (1 + dp[i - coin]) if(i - coin > 0)
// 1 + dp[i - coin] 代表着 coin被选中
// 所以需要遍历每个硬币，得到最小的dp[i]
// 如果最后发现 dp[i]的值依旧是 amount + 1
// 意味着这个i无法达到 使用现有的coins

// TODO
// 还有一种做法DFS + greedy + pruning剪枝
// 参考 huahua的做法

let coins = [1,2,5], amount = 11;
let coins1 = [2], amount1 = 3;
let coins2 = [1], amount2 = 0;
console.log(coinChange(coins, amount));
console.log(coinChange(coins1, amount1));
console.log(coinChange(coins2, amount2));