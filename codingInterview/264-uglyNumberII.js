// 264. Ugly Number II
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return the nth ugly number.

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    // 这道题的思路是
    // dp[i] = Math.min(dp[p2] * 2 , dp[p3] * 3, dp[p5] * 5)
    // p2 代表第几位数已经被用来使用生产丑数了
    let dp = new Array(n).fill(1);
    let p2 = 0, p3 = 0, p5 = 0;
    for (let i = 1; i < n; i++) {
        let tmp2 = dp[p2] * 2;
        let tmp3 = dp[p3] * 3;
        let tmp5 = dp[p5] * 5;
        dp[i] = Math.min(tmp2, tmp3, tmp5);
        if (dp[i] === tmp2) {
            p2++;
        }
        if (dp[i] === tmp3) {
            p3++;
        }
        if (dp[i] === tmp5) {
            p5++;
        }
    }
    return dp[n - 1];
};

let n = 10;
let n1 = 1;
console.log(nthUglyNumber(n));
console.log(nthUglyNumber(n1));