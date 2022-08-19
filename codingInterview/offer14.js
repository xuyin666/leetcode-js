// 剑指 Offer 14- I. 剪绳子
// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    // let dp = new Array(n + 1).fill(1);
    // for (let i = 2; i <= n; i++) {
    //     for (let j = 1; j <= i - 1; j++) {
    //          这里 j * dp[i - j] 代表着从j地方开始减 然后之后继续减
    //          j * (i - j) 代表着从j地方开始剪 然后之后就不剪了
    //         dp[i] = Math.max(dp[i], j * dp[i - j], j * (i -j))
    //     }
    // }
    // return dp[n]
    let hashMap = new Map();
    let dfs = function(n) {
        if (n === 1) return 1;
        if (hashMap.has(n)) return hashMap.get(n);
        let res = 0;
        for (let i = 1; i <= n - 1; i++) {
            res = Math.max(res, i * (n - i), i * dfs(n - i))
        }
        hashMap.set(n, res);
        return res;
    }
    return dfs(n);
};

console.log(cuttingRope(2));
console.log(cuttingRope(10));
