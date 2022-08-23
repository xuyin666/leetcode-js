# 122. Best Time to Buy and Sell Stock II
# You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
# On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
# Find and return the maximum profit you can achieve.

from typing import List
class Solution:
    # 这道题的是想法是 如果当天比前天便宜就买一股，没有就不买
    # 同时因为可以当天卖当天买 
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        for i in range(1, len(prices)):
            if prices[i] > prices[i - 1]:
                res = res + prices[i] - prices[i - 1]
        return res

    # def maxProfit(self, prices: List[int]) -> int:
    #     dp = {}
    #     def profit(index, canBuy) :
    #         if index == len(prices):
    #             return 0
    #         myStr = str(index) + ',' + str(canBuy)
    #         if myStr in dp:
    #             return dp[myStr]
    #         if canBuy:
    #             # if we buy now or we wait later
    #             res = max(-prices[index] + profit(index + 1, False), 
    #                 profit(index + 1, True))
    #             dp[myStr] = res
    #             return res
    #         else:
    #             # we sell now or we wait later
    #             res = max(prices[index] + profit(index + 1, True),
    #                 profit(index + 1, False))
    #             dp[myStr] = res
    #             return res
        
    #     return profit(0, True)
        

prices = [7,1,5,3,6,4]
print(Solution().maxProfit(prices))
prices = [1,2,3,4,5]
print(Solution().maxProfit(prices))
prices = [7,6,4,3,1]
print(Solution().maxProfit(prices))