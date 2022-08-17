// 72. Edit Distance
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
// You have the following three operations permitted on a word:
// Insert a character
// Delete a character
// Replace a character

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = new Map();
    let dfs = function(i, j) {
        if (i === word1.length && j === word2.length)
            return 0;
        if (i > word1.length || j > word2.length) {
            return Number.MAX_SAFE_INTEGER;
        }
        let str = i + "," + j;
        if (dp.has(str)) return dp.get(str);
        if (word1.charAt(i) === word2.charAt(j)) {
            let res = dfs(i + 1, j + 1);
            dp.set(str, res);
            return res;
        } else {
            let deleteRes = dfs(i + 1, j);
            let addRes = dfs(i, j + 1);
            let replaceRes = dfs(i + 1, j + 1);
            let res = 1 + Math.min(deleteRes, addRes, replaceRes);
            dp.set(str, res);
            return res;
        }
    }
    return dfs(0, 0);
};

let word1 = "horse", word2 = "ros";
let word3 = "intention", word4 = "execution";
console.log(minDistance(word1, word2));
console.log(minDistance(word3, word4));