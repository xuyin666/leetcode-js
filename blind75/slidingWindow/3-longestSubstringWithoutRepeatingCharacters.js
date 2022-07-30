// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let l = 0, r = 0;
    let res = 0;
    let set = new Set();
    while(r < len) {
        while (set.has(s.charAt(r))) {
            set.delete(s.charAt(l));
            l++;
        }
        set.add(s.charAt(r))
        res = Math.max(res, r - l + 1);
        r++;
    }
    return res;
};

// 这题思路是滑动窗口
// 需要做的事情 先 r = 0, l = 0;
// 然后 创建一个set, 代表着那个窗口，这个窗口包含着，不重复的substring
// 遍历s，如果s[r]不存在于set 只需要加入到set中
// 如果s[r]存在于set，则需要移动窗口，直到那个s[r]不存在于set中
// 移动窗口则是 l++ 且 在set中删除相应的s[l]
// 这思路相当于是遍历了所有可能的不重复substring

let s = "abcabcbb";
let s1 = "bbbbb";
let s2 = "pwwkew";
console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));

