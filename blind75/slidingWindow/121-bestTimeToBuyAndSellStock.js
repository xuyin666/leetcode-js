// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    let l = 0, r = 1;
    let res = 0;
    // l can only be smaller than r
    while(r < len) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            res = Math.max(res, profit);
        } else {
            l = r;
        }
        r++;
    }
    return res;
};

// 这道题思路是双指针 加上一点的滑动窗口
// 有l, r指针
// l指向0 r也指向1
// 遍历整个prices数组 (r >= length)时停止
// 如果 prices[r] > price[l] 计算利润 记录这个利润 因为代表着这个会挣钱
// 如果 prices[r] < price[l] l = r 代表着我们找到了r之后l之前的最低点
// 然后 r++代表着往后一天 （挣钱不挣钱 主要靠r来移动）
// 从 r 到 l之间的最大利润以及找到 接下来要找的是l之后的最大利润

let prices = [7,1,5,3,6,4];
let prices1 = [7,6,4,3,1];
console.log(maxProfit(prices));
console.log(maxProfit(prices1));