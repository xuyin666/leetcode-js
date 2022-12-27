# 605. Can Place Flowers
# You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
# Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

from typing import List
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        res = [0] + flowerbed + [0]
        for i in range(1, len(res) - 1):
            if res[i - 1] == 0 and res[i] == 0 \
                and res[i + 1] == 0:
                res[i] = 1
                n = n -1
        return True if n <= 0 else False

# 这道题的思路，
# 我们可以想象最左边和最右边各自有一个空格
# 我们再去遍历这个花床，如果它自己，它右边，它左边为空，则可以放置一盆花



flowerbed = [1,0,0,0,1]
n = 1
print(Solution().canPlaceFlowers(flowerbed, n))
flowerbed = [1,0,0,0,1]
n = 2
print(Solution().canPlaceFlowers(flowerbed, n))
