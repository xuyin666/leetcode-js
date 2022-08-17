// 115. Distinct Subsequences
// Given two strings s and t, return the number of distinct subsequences of s which equals t.
// A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).
// The test cases are generated so that the answer fits on a 32-bit signed integer.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let dp = new Map();
    let backtracking = function(i, j) {
        if (j === t.length) return 1;
        if (i === s.length) return 0;
        let str = i + "," + j;
        if (dp.has(str)) return dp.get(str);
        // if s[i] != t[j] we need to see the next char of the s
        if (s.charAt(i) !== t.charAt(j)) {
            let res = backtracking(i + 1, j);
            dp.set(str, res)
            return res;
        } else {
            // backtracking(i + 1, j) means that we don't take the char i
            // backtracking(i + 1, j + 1) means that we will take the char i 
            let res = backtracking(i + 1, j) + backtracking(i + 1, j + 1)
            dp.set(str, res)
            return res;
        }
    }
    return backtracking(0, 0);
};

let s = "rabbbit", t = "rabbit"
let s1 = "babgbag", t1 = "bag";
console.log(numDistinct(s, t));
console.log(numDistinct(s1, t1));
