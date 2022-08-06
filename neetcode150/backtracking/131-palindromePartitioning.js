// 131. Palindrome Partitioning
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// A palindrome string is a string that reads the same backward as forward.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = []

    let dfs = function(left, curr) {
        if (left === s.length) {
            res.push([...curr]);
            return;
        }
        for (let mid = left + 1; mid <= s.length; mid++) {
            let leftStr = s.substring(left, mid);
            if (isPalidrome(leftStr)) {
                curr.push(leftStr);
                dfs(mid, curr);
                curr.pop();
            }
        }
    }

    dfs(0, []);
    return res;
};

let isPalidrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if (s.charAt(left) !== s.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}


let s = "aab";
let s1 = "a";
console.log(partition(s));
console.log(partition(s1));
