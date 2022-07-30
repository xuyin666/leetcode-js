// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map();
    let res = 0;
    let len = s.length;
    let l = 0, r = 0;

    while (r < len) {
        // insert s[r]/ch 
        let ch = s.charAt(r);
        if (map.has(ch)) map.set(ch, map.get(ch) + 1);
        else map.set(ch, 1);

        // need to be a 'while', not 'if' for example s = AABAB, k = 1
        while ((r - l + 1) - Math.max(...map.values()) > k) {
            // 没必要验证 这个map.get(s.charAt(l)) - 1是否大于0 因为只要l < r 在这个map中就一定会有map[s.charAt(l)]的值
            map.set(s.charAt(l), map.get(s.charAt(l)) - 1)
            l++
        }
        
        res = Math.max(res, r - l + 1);
        r++;
    }
    return res;
};

// todo: 还有一种解决办法，不需要遍历map
// 每次加一个s[r]的时候，比较是否 新的s[r] > maxF
// len = r - l + 1 - maxF
// 如果 maxF 没有变大 len 与 k的关系则不会改变
// 所以不需要处理

// 这道题的思路是
// 用一个map记录每个字符出现的次数
// 如果( r - l + 1 ) :总长度 - (出现次数最多的字符) <= k  一切OK
let s = "ABAB", k = 2;
let s1 = "AABABBA", k1 = 1;

console.log(characterReplacement(s, k));
console.log(characterReplacement(s1, k1));
