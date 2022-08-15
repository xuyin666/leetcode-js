// 150. Evaluate Reverse Polish Notation
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (token === "+") {
            let right = stack.pop();
            let left = stack.pop();
            stack.push(left + right);
        } else if (token === "-") {
            let right = stack.pop();
            let left = stack.pop();
            stack.push(left - right);
        } else if (token === "*") {
            let right = stack.pop();
            let left = stack.pop();
            stack.push(left * right);
        } else if (token === "/") {
            let right = stack.pop();
            let left = stack.pop();
            stack.push(parseInt(left / right));
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
};

// 这道题思路是 遍历token然后检查那个对应的字符
// 如果是数字则把值推入到stack中
// 遇到 运算符号，再把值推出来，再把结果推入stack中

let tokens = ["2","1","+","3","*"];
let tokens1 = ["4","13","5","/","+"];
let tokens2 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));
console.log(evalRPN(tokens1));
console.log(evalRPN(tokens2));
