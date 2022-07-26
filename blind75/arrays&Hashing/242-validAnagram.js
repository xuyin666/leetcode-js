// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let lenS = s.length;
    let lenT = t.length;

    if (lenS !== lenT) return false;

    let hashMapS = new Map();
    let hashMapT = new Map();

    let ch;

    for (let i = 0; i < lenS; i++) {
        ch = s.charAt(i);
        if (hashMapS.has(ch)) {
            let oldValue = hashMapS.get(ch);
            hashMapS.set(ch, oldValue + 1);
        } else {
            hashMapS.set(ch, 1);
        }

        ch = t.charAt(i);
        if(hashMapT.has(ch)) {
            let oldValue = hashMapT.get(ch);
            hashMapT.set(ch, oldValue + 1);
        } else {
            hashMapT.set(ch, 1);
        }
    }

    for (const key of hashMapS.keys()) {
        if (hashMapS.get(key) !== hashMapT.get(key))
            return false;
    }

    return true;
};

// 先比较两个字符串的长度，如果长度不同直接返回false
// 然后把每个字符串中，字符出现的次数记下来，分别记录在两个hashMap中
// 再比较这两个hashMap是否相同

// 将两个string排序 然后再比较是否相同

let s = "anagram", t = "nagaram";
let s1 = "rat", t1 = "car";
console.log(isAnagram(s, t));
console.log(isAnagram(s1, t1));