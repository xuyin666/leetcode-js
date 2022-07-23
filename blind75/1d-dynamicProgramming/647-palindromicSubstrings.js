// 647. Palindromic Substrings
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len = s.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        let l = i,
            r = i;
        while (s.charAt(l) === s.charAt(r)) {
            l--;
            r++;
            res++;
            if (l < 0 || r >= len) 
                break;
        }
    }

    for (let i = 0; i < len; i++) {
        let l = i,
            r = i + 1;
        while (s.charAt(l) === s.charAt(r)) {
            l--;
            r++;
            res++;
            if (l < 0 || r >= len) 
                break;
        }
    }
    return res;
};

// 以index i为核心 我们可以向两边延展 来查看是否为回文字符串
// 或者我们可以以index i i+1为核心 向两边延展 来查看是否为回文字符串
// 思路就是我们遍历两次那个数组，设置两个变量l，r来作为指针
// 第一次 以i为起始点 l = r = i 比较s(l)和s(r)，如果同时 l >= 0 且 r < len, l--, r++;
// 第二次 以i, i + 1为起始点 l = i, r = i + 1 比较s(l)和s(r)，如果同时 l >= 0 且 r < len, l--, r++;


let s = "abc";
let s1 = "aaa";
console.log(countSubstrings(s));
console.log(countSubstrings(s1));