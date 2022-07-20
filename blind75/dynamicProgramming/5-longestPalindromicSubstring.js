// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLen = 0;
    let maxStr = "";
    let len = s.length;
    for (let i = 0; i < len; i++) {
        let l = i,
            r = i;
        while (l >= 0 && r < len && s.charAt(l) === s.charAt(r)) {
            l--;
            r++;
        } 
        if (r - l - 1> maxLen) {
            maxLen = r - l - 1;
            maxStr = s.substring (l + 1, r)
        }
    }
    for (let i = 0; i < len; i++) {
        let l = i,
            r = i + 1;
        while (l >= 0 && r < len && s.charAt(l) === s.charAt(r)) {
            l--;
            r++;
        } 
        if (r - l - 1> maxLen) {
            maxLen = r - l - 1;
            maxStr = s.substring (l + 1, r)
        }
    }
    return maxStr;
};

// 以index i为核心 我们可以向两边延展 来查看是否为回文字符串
// 或者我们可以以index i+1为核心 向两边延展 来查看是否为回文字符串
// 思路就是我们遍历两次那个数组，设置两个变量l，r来作为指针
// 第一次 以i为起始点 l = r = i 比较s(l)和s(r)，如果同时 l >= 0 且 r < len, l--, r++;
// 第二次 以i, i + 1为起始点 l = i, r = i + 1 比较s(l)和s(r)，如果同时 l >= 0 且 r < len, l--, r++;

let s1 = "babad";
let s2 = "cbbd";
console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));
