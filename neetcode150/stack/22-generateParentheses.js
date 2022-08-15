// 22. Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 这道题得用backtracking，
    // 需要满足两个条件，第一个条件是当左括号数量多于或者等于n后就不能继续加了
    // 第二个条件是 左括号的数量得多余右括号 因为不然的话相当于是no well-formed parentheses
    let res = [];
    let curr = []
    let dfs = function(open, close) {
        if (open === n && close === n) {
            res.push(curr.join(""))
            return;
        }
        if (open < n) {
            curr.push("(");
            dfs(open + 1, close);
            curr.pop()
        }
        if (open > close) {
            curr.push(")");
            dfs(open, close + 1);
            curr.pop();
        }
    }
    dfs(0, 0);
    return res;
};

let n = 3;
let n1 = 1;
console.log(generateParenthesis(n));
console.log(generateParenthesis(n1));
