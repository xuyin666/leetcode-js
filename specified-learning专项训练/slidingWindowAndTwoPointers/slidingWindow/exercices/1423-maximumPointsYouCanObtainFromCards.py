# 1423. Maximum Points You Can Obtain from Cards
# There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
# In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
# Your score is the sum of the points of the cards you have taken.
# Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

from typing import List
class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        # 可以将问题转化一下，即为n-k个区间值内，最小的值为
        # 然后用数列总和减去最小值
        if k >= len(cardPoints):
            return sum(cardPoints)
        sumPoint = 0
        for i in range(len(cardPoints) - k):
            sumPoint = sumPoint + cardPoints[i]
        # print(sumPoint)
        minSumPoint = sumPoint
        for i in range(len(cardPoints) - k, len(cardPoints)):
            sumPoint = sumPoint + cardPoints[i] - cardPoints[i + k - len(cardPoints)]
            minSumPoint = min(sumPoint, minSumPoint)
        return sum(cardPoints) - minSumPoint

cardPoints = [1,2,3,4,5,6,1]
k = 3
print(Solution().maxScore(cardPoints, k))
cardPoints = [2,2,2]
k = 2
print(Solution().maxScore(cardPoints, k))
cardPoints = [9,7,7,9,7,7,9]
k = 7
print(Solution().maxScore(cardPoints, k))
cardPoints = [1,1000,1]
k = 1
print(Solution().maxScore(cardPoints, k))
cardPoints = [1,79,80,1,1,1,200,1]
k = 3
print(Solution().maxScore(cardPoints, k))

