// 97. Interleaving String
// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
// An interleaving of two strings s and t is a configuration where s and t are divided into n and m non-empty substrings respectively, such that:
// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    
};

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
let s4 = "aabcc", s5 = "dbbca", s6 = "aadbbbaccc";
let s7 = "", s8 = "", s9 = "";
console.log(isInterleave(s1, s2, s3));
console.log(isInterleave(s4, s5, s6));
console.log(isInterleave(s7, s8, s9));
