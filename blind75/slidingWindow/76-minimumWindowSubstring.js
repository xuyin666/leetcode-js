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
    // 特殊情况
    if (t === "") return "";


    // 记录着需要满足t的每个字符串的次数
    let countT = new Map();
    // 那个窗口，记录着遍历的字符串
    let window = new Map();

    for (let ch of t) {
        if (countT.has(ch)) countT.set(ch, countT.get(ch) + 1);
        else countT.set(ch, 1);
    }
    let have = 0;
    let need = countT.size; // 代表着需要的总字符串，不包含重复的字符
    let lenS = s.length;
    let minLen = Number.MAX_VALUE;
    let minL = -1, minR = -1;
    let l = 0;
    for (let r = 0; r < lenS; r++) {
        let newCh = s.charAt(r)
        if (window.has(newCh)) window.set(newCh, window.get(newCh) + 1);
        else window.set(newCh, 1); 

        // 如果countT有这个newCh 且刚好到达window.get(newCh) === countT.get(newCh)
        // 代表着一个字符满足了条件
        if (countT.has(newCh) 
            && window.get(newCh) === countT.get(newCh)) {
                have++;        
        } 
        while (have === need) {
            let realLen = r - l + 1
            if (minLen > realLen) {
                minLen = realLen;
                minL = l;
                minR = r;
            }

            // 为什么先减 再验证呢
            // countT中包含着必要的key，如果减去一个最左边的字符串没有影响 
            // 但是这些可以出现的次数是可能多于需要的
            // 如果在window中的次数少于了countT中的次数，这代表没有满足count中的所有条件
            // 需要have--
            window.set(s.charAt(l), window.get(s.charAt(l)) - 1);
            // have-- 最多只会被执行一次在一个while中 因为have改变条件将不再满足
            if (countT.has(s.charAt(l)) 
                && window.get(s.charAt(l)) < countT.get(s.charAt(l))) {
                    have--;
            }
            l++;
        }
    }
    if (minLen === Number.MAX_VALUE)
        return "";
    else
        return s.substring(minL, minR + 1);
};


// 这道题的思路是滑动窗口（废话）
// 首先把 string t 放入到一个 hashMap : countT中
// 然后遍历s, 
// l = 0, r = 0; need = countT.length(不重复字符串的长度)
// 把 s[r] 加入到 hashMap : window 中
// 再判断是否这个s[r]存在于 countT中 并且确认是否 countT[s[r]] === window[s[r]]
// 相等则证明 s[r] 已经达到满足的条件， have++;
// 当 have == need的时候代表 全部需求已经到达，
// 把从l到r记录下来
// 接下需要做的就是收缩
// 先保存 l, r = 最小值
// window[s[l]] --
// if (s[l] in window)
// have--
// l++


let s = "ADOBECODEBANC", t = "ABC";
let s1 = "a", t1 = "a";
let s2 = "a", t2 = "aa";
console.log(minWindow(s, t));
console.log(minWindow(s1, t1));
console.log(minWindow(s2, t2));
