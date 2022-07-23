// 1143. Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1);
    }
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i <= n; i++) {
        dp[0][i] = 0;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1))
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[m][n];
};
let text1 = "abcde", text2 = "ace";
let text3 = "abc", text4 = "abc";
let text5 = "abc", text6 = "def";
console.log(longestCommonSubsequence(text1, text2));
console.log(longestCommonSubsequence(text3, text4));
console.log(longestCommonSubsequence(text5, text6));