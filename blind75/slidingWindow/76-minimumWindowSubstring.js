// 76. Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// A substring is a contiguous sequence of characters within the string.


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
};

let s = "ADOBECODEBANC", t = "ABC";
let s1 = "a", t1 = "a";
let s2 = "a", t2 = "aa";
console.log(minWindow(s, t));
console.log(minWindow(s1, t1));
console.log(minWindow(s2, t2));
