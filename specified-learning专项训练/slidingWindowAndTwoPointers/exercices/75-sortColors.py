# 75. Sort Colors
# Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
# We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
# You must solve this problem without using the library's sort function.

from typing import List
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # 弄两个指针，i，j
        # 从 0 到 i都是 0
        # 从j 到end 都是2
        start = 0
        end = len(nums) - 1
        # i 指向当前的值， 当i超过end是就代表遍历了一遍
        i = 0 
        while i <= end:
            while i <= end and nums[i] == 2:
                nums[i], nums[end] = nums[end], nums[i]
                end = end - 1
            if nums[i] == 0:
                nums[i], nums[start] = nums[start], nums[i]
                start = start + 1
            i = i + 1
            

        # i = 0
        # j = 0
        # while (i < len(nums)):
        #     if (nums[i] == 0):
        #         nums[j], nums[i] = nums[i], nums[j]
        #         j = j + 1
        #     i = i + 1
        # i = j
        # while (i < len(nums)):
        #     if (nums[i] == 1):
        #         nums[i], nums[j] = nums[j], nums[i]
        #         j = j + 1
        #     i = i + 1

nums = [2,0,2,1,1,0]
print(Solution().sortColors(nums))
nums = [2,0,1]
print(Solution().sortColors(nums))
