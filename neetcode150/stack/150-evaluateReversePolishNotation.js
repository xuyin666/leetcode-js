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
    
};

let tokens = ["2","1","+","3","*"];
let tokens1 = ["4","13","5","/","+"];
let tokens2 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));
console.log(evalRPN(tokens1));
console.log(evalRPN(tokens2));
