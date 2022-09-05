# 42. Trapping Rain Water
# Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

from typing import List
class Solution:
    def trap(self, height: List[int]) -> int:
        # 还有一种双指针的解放，用一个left，和right记录
        # 用leftMax 和 rightMax来记录最大值
        # 每次处理leftMax 和 rightMax最小值
        left = 0
        right = len(height) - 1
        leftMax = height[left]
        rightMax = height[right]
        res = 0
        while left <= right:
            # 代表着我们可以使用leftMax这个值
            # leftMax 代表着从左到left的最大值 这个最大值是准确的
            # rightMax代表着从右到right的最大值 这个最大值是准确的
            # 为什么可以直接比较leftMax 和 rightMax
            # leftMax 代表着最大值， 如果rightMax是最大值 leftMax 小于 rightMax
            # 我们使用leftMax的值 如果rightMax 不是最大值，已经比leftMax大 也是OK
            if leftMax < rightMax:
                if height[left] > leftMax:
                    leftMax = height[left]
                else:
                    res = res + leftMax - height[left]
                left = left + 1
            else:
                if height[right] > rightMax:
                    rightMax = height[right]
                else:
                    res = res + rightMax - height[right]
                right = right - 1
        return res




        # if len(height) <= 2: return 0
        # maxRight = [0] * len(height)
        # maxLeft = [0] * len(height)
        # firstEle = height[0]
        # for i in range(1, len(height)):
        #     if firstEle > height[i]:
        #         maxLeft[i] = firstEle
        #     else:
        #         firstEle = height[i]
        #         maxLeft[i] = firstEle
        # lastEle = height[-1]
        # for i in range(len(height) - 2, -1, -1):
        #     if lastEle > height[i]:
        #         maxRight[i] = lastEle
        #     else:
        #         lastEle = height[i]
        #         maxRight[i] = lastEle
        # res = [0] * len(height)
        # for i in range(1, len(height) - 1):
        #     res[i] = max(min(maxLeft[i], maxRight[i]) - height[i], 0)
        # return sum(res)
        return

height = [0,1,0,2,1,0,1,3,2,1,2,1]
print(Solution().trap(height))
height = [4,2,0,3,2,5]
print(Solution().trap(height))
