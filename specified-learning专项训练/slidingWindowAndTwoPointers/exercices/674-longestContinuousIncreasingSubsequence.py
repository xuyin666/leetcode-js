# 674. Longest Continuous Increasing Subsequence
# Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
# A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].


from typing import List
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        # 如果用双指针一次遍历来做，[i, j]代表单调递增的区间
        i = 0
        j = 1
        res = j - i
        while j < len(nums):
            if nums[j] > nums[j - 1]:
                res = max(res, j - i + 1)
            else:
                i = j
            j = j + 1
        return res

    # def findLengthOfLCIS(self, nums: List[int]) -> int:
    #     maxLength = 0
    #     for i in range(len(nums)):
    #         j = i + 1
    #         tmpLength = 1
    #         while j < len(nums):
    #             if nums[j] > nums[j - 1]:
    #                 tmpLength = tmpLength + 1
    #                 j = j + 1
    #             else:
    #                 break
    #         maxLength = max(maxLength, tmpLength)
    #     return maxLength
    
nums = [1,3,5,4,7]
print(Solution().findLengthOfLCIS(nums))
nums = [2,2,2,2,2]
print(Solution().findLengthOfLCIS(nums))
