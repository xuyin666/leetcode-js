# 1475. Final Prices With a Special Discount in a Shop
# Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.
# Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

from typing import List
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        # 这道题我们可以用stack，从后往前遍历
        # 如果prices[i] > stack[-1] prices[i] = prices[i] - stack[-1]
        stack = []
        for i in range(len(prices) - 1, -1, -1):
            while len(stack) != 0 and prices[i] < stack[-1]:
                stack.pop()
            if len(stack) != 0:
                tmp = prices[i]
                prices[i] = prices[i] - stack[-1]
                stack.append(tmp)
            else:
                stack.append(prices[i])
        return prices

        # res = []
        # for i in range(len(prices) - 1, -1, -1):
        #     indexMin = -1
        #     for j in range(i + 1, len(prices)):
        #         if prices[i] >= prices[j]:
        #             indexMin = j
        #             break
        #     if indexMin == -1:
        #         res.insert(0, prices[i])
        #     else:
        #         res.insert(0, prices[i] - prices[indexMin])
        # return res

prices = [8,4,6,2,3]
print(Solution().finalPrices(prices))
prices = [1,2,3,4,5]
print(Solution().finalPrices(prices))
prices = [10,1,1,6]
print(Solution().finalPrices(prices))
