// 91. Decode Ways
// A message containing letters from A-Z can be encoded into numbers using the following mapping:
// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
// Given a string s containing only digits, return the number of ways to decode it.
// The test cases are generated so that the answer fits in a 32-bit integer.

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let len = s.length;
    let dp = new Array(len + 1);
    for (let i = 0; i < len + 1; i++) {
        dp[i] = 1;
    }

    // dp[i] 是包括s[i]和之后所有字符串所存在编码的总次数
    for (let i = len - 1; i >= 0; i--) {
        if (s.charAt(i) === '0') dp[i] = 0; // 以0开头不行
        else {
            dp[i] = dp[i + 1]; 
            if (i + 1 < len && s.charAt(i) === '1') // 确认不是last element
                dp[i] += dp[i + 2];
            if (i + 1 < len && s.charAt(i) === '2' && '0123456'.includes(s.charAt(i + 1))) 
                dp[i] += dp[i + 2];
        }
    }
    return dp[0];
};




// 递归
// var numDecodings = function(s) {
//     let map = new Map();
//     map.set(s.length, 1); // 最后一个“” decodeWay设置为1
//     return helper(s, 0, map)
// };

// let helper = function(s, index, map) {
//     if (s.charAt(index) === '0') return 0;
//     if (map.has(index)) return map.get(index);
//     let res = helper(s, index + 1, map);
//     // if (index + 1 < s.length) 来验证这不是倒数第一个数
//     // means if index was the last index, we will stop
    
//     if (index + 1 < s.length && s.charAt(index) === '1') {
//         res += helper(s, index + 2, map);
//     }

//     if (index + 1 < s.length 
//         && s.charAt(index) === '2' 
//         && '0123456'.includes(s.charAt(index + 1))) {
//         res += helper(s, index + 2, map);
//     }
//     map.set(index, res);
//     return res;        
// }

// dp[i] 是包括s[i]和之后所有字符串所存在编码的总次数
// 
// if (s[i] == 0) 意味着s[i]为0，并且‘06’不被允许 则dp[i]=0
// if (s[i] == 1) 意味着s[i]为0，接下来的数字可以为任何数 比如说'10 - 19'
// 所以我们能够得到dp[i] = dp[i + 1] + dp[i + 2]   
// dp[i + 1] 意味从下一位数开始计算，s(i)单独一个 1
// dp[i + 2] 意味从下下位数开始计算，s(i)s(i+1)一起 1[0-9] 
// (175) => (75) || (175) => (5)
// dp[i] += dp[i + 1] 因为只要s[i]不为0，s[i]就可以被编码 29 => 9, 76 => 6 
// if (s[i] == 2) 我们就需要检查下一位 
//  if (s[i+1] in '0123456' dp[i] += dp[i+2] (20-26 OK)
//  else (27 || 28 || 29) 则不被允许
// 

let s = "12";
let s1 = "226";
let s2 = "06";
console.log(numDecodings(s));
console.log(numDecodings(s1));
console.log(numDecodings(s2));

