// 10. Regular Expression Matching
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
};

let s = "aa", p = "a";
let s1 = "aa", p1 = "a*";
let s2 = "ab", p2 = ".*";
console.log(isMatch(s, p));
console.log(isMatch(s1, p1));
console.log(isMatch(s2, p2));
