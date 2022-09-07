# 904. Fruit Into Baskets
# You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
# You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
# You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
# Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
# Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
# Given the integer array fruits, return the maximum number of fruits you can pick.

from typing import List
class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        # 可以转换为 两个不同的数 最大的连续数组长度
        l = 0
        r = 0
        maxLen = 0
        freq = {}
        while r < len(fruits):
            freq[fruits[r]] = freq.get(fruits[r], 0) + 1
            while len(freq) > 2:
                freq[fruits[l]] = freq[fruits[l]] - 1
                if freq[fruits[l]] == 0:
                    del freq[fruits[l]]
                l = l + 1
            maxLen = max(maxLen, r - l + 1)
            r = r + 1
        return maxLen

fruits = [1,2,1]
print(Solution().totalFruit(fruits))
fruits = [0,1,2,2]
print(Solution().totalFruit(fruits))
fruits = [1,2,3,2,2]
print(Solution().totalFruit(fruits))
fruits = [3,3,3,1,2,1,1,2,3,3,4]
print(Solution().totalFruit(fruits))
