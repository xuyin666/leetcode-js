# 11. Container With Most Water
# You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
# Find two lines that together with the x-axis form a container, such that the container contains the most water.
# Return the maximum amount of water a container can store.
# Notice that you may not slant the container.

from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height) - 1
        tmpArea = 0
        res = 0
        while l < r:
            tmpArea = (r - l) * min(height[l], height[r])
            res = max(tmpArea, res)
            if height[l] < height[r]:
                l = l + 1
            else:
                r = r - 1
        return res

height = [1,8,6,2,5,4,8,3,7]
print(Solution().maxArea(height))
height = [1,1]
print(Solution().maxArea(height))
