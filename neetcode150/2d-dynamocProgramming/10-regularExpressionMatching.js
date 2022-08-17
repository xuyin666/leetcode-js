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
    let dp = new Map()
    // i point to the s, j point to the p
    let dfs = function(i, j) {
        if (i === s.length && j === p.length) 
            return true;
        // s = "aaaaaa" p = "a*b" 在这个情况下，s会先到末尾到了末尾则证明返回false 
        if (j === p.length) 
            return false;
        let str = i + "," + j;
        if (dp.has(str)) return dp.get(str);
        // when we arrive here, we are sure thaat j < p.length
        // because of if (j === p.length), but we need to ensure the i < s.length
        let matched = (i < s.length &&
            ((s.charAt(i) === p.charAt(j)) || 
            (p.charAt(j) === "."))) 
        if (matched) {
            // if there is a next char and it's an asterix 
            if (j + 1 < p.length && p.charAt(j + 1) === "*") {
                // we take the "*" , and we forget the "*"
                let res = dfs(i + 1, j) || dfs(i, j + 2);
                dp.set(str, res);
                return res;
            } else {
                let res = dfs(i + 1, j + 1);
                dp.set(str, res);
                return res;
            }
        } else {
            // if it doesn't match at j, we check if we have an asterix for the next char
            if (j + 1 < p.length && p.charAt(j + 1) === "*") {
                let res  = dfs(i, j + 2);
                dp.set(str, res);
                return res;
            } else {
                dp.set(str, false);
                return false;
            }
        }
    }
    return dfs(0, 0);
};

let s = "aa", p = "a";
let s1 = "aa", p1 = "a*";
let s2 = "ab", p2 = ".*";
let s3 = "aab", p3 = "c*a*b";
let s4 = "a", p4 = "ab*";
console.log(isMatch(s, p));
console.log(isMatch(s1, p1));
console.log(isMatch(s2, p2));
console.log(isMatch(s3, p3));
console.log(isMatch(s4, p4));

