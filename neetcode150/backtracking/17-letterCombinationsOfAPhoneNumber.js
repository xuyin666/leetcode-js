// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// 2: abc 3:def 4:ghi 5:jkl 6:mno 7:pqrs 8:tuv 9:wxyz 

let digitMapping = {
    '2' : 'abc',
    '3' : 'def',
    '4' : 'ghi',
    '5' : 'jkl',
    '6' : 'mno',
    '7' : 'pqrs',
    '8' : 'tuv',
    '9' : 'wxyz'
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];

    let dfs = function(index, curr) {
        if(index === digits.length) {
            res.push(curr);
            return;
        }
        for (let ch of digitMapping[digits.charAt(index)]) {
            dfs(index + 1, curr + ch);
        }
    }
    if (digits.length !== 0)
        dfs(0, "");
    return res;
};

let digits = "23";
let digits1 = "";
let digits2 = "2";
console.log(letterCombinations(digits));
console.log(letterCombinations(digits1));
console.log(letterCombinations(digits2));

