// 309. Best Time to Buy and Sell Stock with Cooldown
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // i is the index that we are
    // canBuy it means that in the index, if we can buy the new stock or not
    let dp = new Map();
    let backTracking = function(i, canBuy) {
        let str = i + "," + canBuy;
        if (dp.has(str)) return dp.get(str);
        if (i >= prices.length) return 0;
        // if we can buy now
        if (canBuy) {
            // if we buy now 
            // we could not buy any stock;
            let buyNow = backTracking(i + 1, false) - prices[i];
            
            // if we don't buy now 
            let buyLater = backTracking(i + 1, true); 
            let res = Math.max(buyNow, buyLater)
            dp.set(str, res);
            return res;
        } else {
            // if we can't buy the stock in the index i
            // we can sell now or sell later
            // if we sell now, for the next day, we can buy stock
            // why i + 2, because you can't buy a stcok when you sell the stock
            let sellNow = backTracking(i + 2, true) + prices[i];
            // if we don't sell the stock now, we can't buy for the next day
            let sellLater = backTracking(i + 1, false);
            let res = Math.max(sellNow, sellLater);
            dp.set(str, res);
            return res;
        }
    }
    return backTracking(0, true);
};

let prices = [1,2,3,0,2];
let prices1 = [1];
console.log(maxProfit(prices));
console.log(maxProfit(prices1));
