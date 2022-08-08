// 338. Counting Bits
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = new Array(n + 1).fill(0);
    let sub = 1;
    for (let i = 1; i <= n; i++) {
        if (i == sub * 2) {
            sub = sub * 2;
        }
        res[i] = 1 + res[i - sub]
    }
    return res;
};

// 这道题思路是 观察 bits的规律 dp[n] = 1 + dp[n - 2的最大次方]
// 0 = "0"  dp[0]
// 1 = "01" dp[1] = 1 + dp[1 - 1]
// 2 = "10" dp[2] = 1 + dp[2 - 2]
// 3 = "11" dp[3] = 1 + dp[3 - 2]
// 4 = "100" dp[4] = 1+ dp[4 - 4]
// 5 = "101" dp[5] = 1 + dp[5 - 4]
// 6 = "110" dp[6] = 1 + dp[6 - 4]
// 7 = "111" dp[7] = 1 + dp[7 - 4]
// 8 = "1000" dp[8] = 1 + dp[8 - 8]


let n = 2;
let n1 = 5;
console.log(countBits(n));
console.log(countBits(n1));
