// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = s.toLowerCase();
    let len = newS.length;
    for (let i = 0, j = len -1; i <= j; i++, j--) {
        while (newS.charAt(i).charCodeAt(0) < 'a'.charCodeAt(0) || newS.charAt(i).charCodeAt(0) > 'z'.charCodeAt(0))
            i++;
        while (newS.charAt(j).charCodeAt(0) < 'a'.charCodeAt(0) || newS.charAt(j).charCodeAt(0) > 'z'.charCodeAt(0))
            j--;
        if (newS.charAt(i) !== newS.charAt(j))
            return false;
    } 
    return true;
};

let s = "A man, a plan, a canal: Panama";
let s1 = "race a car";
let s2 = " ";

console.log(isPalindrome(s));
console.log(isPalindrome(s1));
console.log(isPalindrome(s2));