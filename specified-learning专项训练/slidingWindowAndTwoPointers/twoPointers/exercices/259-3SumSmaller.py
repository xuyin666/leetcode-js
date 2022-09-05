# 259. 3Sum Smaller
# Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

from typing import List
class Solution:
    def threeSumSmaller(self, nums: List[int], target: int) -> int:
        if len(nums) < 3:
            return 0
        nums.sort()
        count = 0
        for i in range(len(nums) - 2):
            left = i + 1
            right = len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total < target:
                    # 一旦当找到第一个total小于target的值，
                    # 其实就可以确定数量来 因为只需让left 不动 right左移
                    # 这样的话 total一定会变小
                    # 然后我们再尝试增大left，看看total是否大于target
                    count = count + right - left
                    left = left + 1
                else:
                    right = right - 1
        return count


nums = [-2,0,1,3]
target = 2
print(Solution().threeSumSmaller(nums, target))
nums = []
target = 0
print(Solution().threeSumSmaller(nums, target))
nums = [0]
target = 0
print(Solution().threeSumSmaller(nums, target))
nums = [3,1,0,-2]
target = 4
print(Solution().threeSumSmaller(nums, target))


