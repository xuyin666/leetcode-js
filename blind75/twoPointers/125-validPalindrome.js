// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let len = s.length;
    let l, r;
    for (l = 0, r = len - 1; l < r; l++, r--) {
        while (!isAlphanumeric(s.charAt(l)) && l < r)
            l++;
        while (!isAlphanumeric(s.charAt(r)) && l < r)
            r--;
        if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase())
            return false;
    }
    return true;
};


var isAlphanumeric = function(ch) {
    if ((ch.charCodeAt(0) >= 'a'.charCodeAt(0) && ch.charCodeAt(0) <= 'z'.charCodeAt(0)) 
        || (ch.charCodeAt(0) >= 'A'.charCodeAt(0) && ch.charCodeAt(0) <= 'Z'.charCodeAt(0))
        || (ch.charCodeAt(0) >= '0'.charCodeAt(0) && ch.charCodeAt(0) <= '9'.charCodeAt(0)))
        return true;
    return false;
}

// 这道题的思路有两种
// 第一种是不太会被采纳的，先取出只有数字和字母的字符
// 再比较正序倒序是否相同
// 第二种 写一个文件判断是否为数字或者字母
// 是字母或者数字就跳过，i 从 0 从前往后，j从length - 1从后往前推

let s = "A man, a plan, a canal: Panama";
let s1 = "race a car";
let s2 = " ";

console.log(isPalindrome(s));
console.log(isPalindrome(s1));
console.log(isPalindrome(s2));


