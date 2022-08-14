// 567. Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // 这道题的思路是用滑动窗口，
    // 我们是用两个hashmap，分别记录出现的那个字母出现次数
    // 然后遍历s2 然后从滑动窗口右边的第一个值开始验证每个字母
    // 看看这个字母是符合s1的
    // 总值为26，因为有26个字母
    let s1Map = new Map();
    let s2Map = new Map();
    for (let i = 0; i <= 25; i++) {
        s1Map.set(String.fromCharCode(i + 'a'.charCodeAt(0)), 0);
        s2Map.set(String.fromCharCode(i + 'a'.charCodeAt(0)), 0);
    }
    for (let ch of s1) {
        s1Map.set(ch, s1Map.get(ch) + 1);
    }
    for (let i = 0; i < s1.length; i++) {
        s2Map.set(s2.charAt(i), s2Map.get(s2.charAt(i)) + 1);
    }
    let totalValid = 26;
    for (let ch of s1Map.keys()){
        if (s1Map.get(ch) !== s2Map.get(ch))
            totalValid = totalValid - 1;
    }
    for (let i = s1.length; i < s2.length; i++) {
        if (totalValid === 26) return true;
        let chFirst = s2.charAt(i - s1.length);
        if (s2Map.get(chFirst) - 1 === s1Map.get(chFirst)) {
            totalValid = totalValid + 1;
        } else if (s2Map.get(chFirst) === s1Map.get(chFirst)) {
            totalValid = totalValid - 1;
        }
        s2Map.set(chFirst, s2Map.get(chFirst) - 1);
        let chLast = s2.charAt(i)
        if (s2Map.get(chLast) + 1 === s1Map.get(chLast)) {
            totalValid = totalValid + 1;
        } else if (s2Map.get(chLast) === s1Map.get(chLast)) {
            totalValid = totalValid - 1;
        }
        s2Map.set(chLast, s2Map.get(chLast) + 1)

    }
    if (totalValid === 26) 
        return true;
    return false;
}


// Complexity: O(26n)
// var checkInclusion = function(s1, s2) {
//     let hashMap = new Map();
//     for (let ch of s1) {
//         if (hashMap.has(ch)) {
//             hashMap.set(ch, hashMap.get(ch) + 1);
//         } else {
//             hashMap.set(ch, 1);
//         }
//     }

//     let start = 0;
//     let end = start + s1.length - 1;
//     while (end < s2.length) {

//         let oneMap = new Map();
//         for (let i = start; i <= end; i++) {
//             if (!hashMap.has(s2.charAt(i))) {
//                 break;
//             } else {
//                 let ch = s2.charAt(i)
//                 if (oneMap.has(ch)) {
//                     oneMap.set(ch, oneMap.get(ch) + 1);
//                 } else {
//                     oneMap.set(ch, 1);
//                 }
//             }
//         }
//         let val = true;
//         if (hashMap.size === oneMap.size) {
//             for (const key of hashMap.keys()) {
//                 if (!(oneMap.has(key)) || (hashMap.get(key) !== oneMap.get(key))) {
//                     val = false;
//                 } 
//             }
//         } else {
//             val = false;
//         }

//         if (val) return true;
//         start = start + 1;
//         end = start + s1.length - 1;
//     }
//     return false;
// };

let s1 = "ab", s2 = "eidbaooo";
let s3 = "ab", s4 = "eidboaoo";
let s5 = "adc", s6 = "dcda";
console.log(checkInclusion(s1, s2));
console.log(checkInclusion(s3, s4));
console.log(checkInclusion(s5, s6));

