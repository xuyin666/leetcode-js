// 678. Valid Parenthesis String
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin = 0;
    let leftMax = 0;
    for (let ch of s) {
        if (ch === '(') {
            leftMax++;
            leftMin++;
        } else if (ch === ')') {
            leftMax--;
            leftMin--;
        } else {
            leftMax++;
            leftMin--;
        }
        if (leftMax < 0) return false;
        if (leftMin < 0) leftMin = 0;
    }
    return leftMin === 0;
};

// 这道题的思路是用两个变量 leftMax, leftMin 来记录"("的数量
// 如果遇到 '(' 则 leftMax 和 leftMin 同时++
// 如果遇到 ')' 则 leftMax 和 leftMin 同时--
// 如果遇到 '*' 则 leftMax++, leftMin--, 这代表着 * 可以作为'(' (leftMin--) 
// 或者 ')' (leftMax++)
// 如果最后 leftMax < 0, 返回false，因为太多')'
// 如果每次 leftMin < 0, 则需要再次赋值为0
// leftMin 代表'('太多了， 但是可以让 '*' 变为 ''
// 最后验证leftMin === 0
let s = "()";
let s1 = "(*)";
let s2 = "(*))";
console.log(checkValidString(s));
console.log(checkValidString(s1));
console.log(checkValidString(s2));
