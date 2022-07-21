// 139. Word Break
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const map = new Map();
    return helper(s, wordDict, map);
};

let helper = function(s, wordDict, map) {
    if (map.has(s)) return map.get(s)
    if (wordDict.includes(s)) {
        map.set(s, true);
        return true;
    }
    let len = s.length;
    for (let i = 1; i < len; i++) {
        let s1 = s.substring(0, i);
        let s2 = s.substring(i, len);
        if (helper(s1, wordDict, map) && wordDict.includes(s2)) {
            map.set(s, true);
            return true;
        }
    }
    map.set(s, false);
    return false;
}

// 这道题的思路是把字符串s切成两片，左边s1，右边s2
// 用memorization的方法把结果储存起来
// 比如说 
// s = "leetcode" 我们可以来检查s1和s2
// helper(s) = helper("l") + isInDict("eetcode")
//              || helper("le") + isInDict("etcode")
//              || helper("lee") + isInDict("tcode")
//              ...
//              || helper("leetcode") + isInDict("") false
// helper("l") 继续递归
// helper("le") 继续递归 
// ...
// helper("leetcod") 继续递归 并把结果存在hashmap中 方便之后查询

let s = "leetcode", 
    wordDict = ["leet","code"];
let s1 = "applepenapple", 
    wordDict1 = ["apple","pen"];
let s2 = "catsandog", 
    wordDict2 = ["cats","dog","sand","and","cat"];

console.log(wordBreak(s, wordDict));
console.log(wordBreak(s1, wordDict1));
console.log(wordBreak(s2, wordDict2));