# 135. Candy
# There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
# You are giving candies to these children subjected to the following requirements:
# Each child must have at least one candy.
# Children with a higher rating get more candies than their neighbors.
# Return the minimum number of candies you need to have to distribute the candies to the children.

from typing import List
# 这道题的思路是，从左往右 分一次糖
# 然后从右往左 分一次糖
# 去这两者的最大值
class Solution:
    def candy(self, ratings: List[int]) -> int:
        if len(ratings) == 1: return 1
        arrFromLeft = [1] * len(ratings)
        for i in range(1, len(ratings)):
            if ratings[i] > ratings[i - 1]:
                arrFromLeft[i] = arrFromLeft[i - 1] + 1
        arrFromRight = [1] * len(ratings)
        for i in range(len(ratings) - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                arrFromRight[i] = arrFromRight[i + 1] + 1
        total = 0
        for i in range(len(ratings)) : 
            total = total + max(arrFromLeft[i], arrFromRight[i])
        return total


ratings = [1,0,2]
print(Solution().candy(ratings))
ratings = [1,2,2]
print(Solution().candy(ratings))
ratings = [1,3,2,2,1]
print(Solution().candy(ratings))
