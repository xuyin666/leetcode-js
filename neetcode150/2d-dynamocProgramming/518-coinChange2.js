// 518. Coin Change 2
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
// You may assume that you have an infinite number of each kind of coin.
// The answer is guaranteed to fit into a signed 32-bit integer.

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let hashMap = new Map();
    let backtracking = function(amount, end) {
        let str = amount + "," + end;
        if (hashMap.has(str)) return hashMap.get(str)
        if (amount < 0) return 0;
        if (amount === 0) return 1;
        let res = 0;
        for (let i = end; i >= 0; i--) {
            res += backtracking(amount - coins[i], i)
        }
        hashMap.set(str, res);
        return res;
    }
    return backtracking(amount, coins.length - 1);
};

let amount = 5, coins = [1,2,5];
let amount1 = 3, coins1 = [2];
let amount2 = 10, coins2 = [10];
console.log(change(amount, coins));
console.log(change(amount1, coins1));
console.log(change(amount2, coins2));

