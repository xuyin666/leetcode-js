// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hashMap = new Map();
    let lenS = s.length;
    let lenT = t.length;
    for (let i = 0; i < lenS; i++) {
        let ch = s.charAt(i);
        if (hashMap.has(ch)) {
            let oldValue = hashMap.get(ch);
            hashMap.set(ch, oldValue + 1);
        } else {
            hashMap.set(ch, 1);
        }
    }
    for (let i = 0; i < lenT; i++) {
        let ch = t.charAt(i);
        if(hashMap.has(ch)) {
            let oldValue = hashMap.get(ch);
            hashMap.set(ch, oldValue - 1);
        } else {
            return false;
        }
    }
    if (lenS <= lenT) {
        for (let i = 0; i < lenT; i++) {
            let ch = t.charAt(i);
            if(hashMap.get(ch) !== 0) {
                return false
            }
        }
    } else {
        for (let i = 0; i < lenS; i++) {
            let ch = s.charAt(i);
            if(hashMap.get(ch) !== 0) {
                return false
            }
        }
    }
    return true;
};

let s = "anagram", t = "nagaram";
let s1 = "rat", t1 = "car";
console.log(isAnagram(s, t));
console.log(isAnagram(s1, t1));