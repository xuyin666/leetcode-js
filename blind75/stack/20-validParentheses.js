// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1.Open brackets must be closed by the same type of brackets.
// 2.Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let len = s.length;
    let leftSymbol = ['{', '[', '('];
    for(let i = 0; i < len; i++) {
        if (leftSymbol.includes(s.charAt(i)))
            stack.push(s.charAt(i))
        else {
            let topSymbol = stack.pop();
            // three cases that the string is not valid
            if (s.charAt(i) === '}' && topSymbol !== '{') 
               return false;
            else if (s.charAt(i) === ']' && topSymbol !== '[')
                return false;
            else if (s.charAt(i) === ')' && topSymbol !== '(')
                return false
        }
    }
    // to avoid the case '{{{{'
    return stack.length === 0;
};

// 思路是用一个栈结构
// 如果遇到 "(" , "[", "{", 就压入栈中
// 如果遇到 ")", "]", "}" 就推出一个字符串，
// 比较这两个字符串是否相对应
// 最后如果这个栈是空的，意味着这个是有效的

let s = "()";
let s1 = "()[]{}";
let s2 = "(]" 
console.log(isValid(s));
console.log(isValid(s1));
console.log(isValid(s2));
