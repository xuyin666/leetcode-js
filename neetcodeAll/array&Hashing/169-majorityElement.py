# 169. Majority Element
# Given an array nums of size n, return the majority element.
# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

from typing import List
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        res, cnt = 0, 0
        for num in nums:
            if cnt == 0:
                res = num
            if num != res:
                cnt = cnt - 1
            else:
                cnt = cnt + 1 
        return res
    # 我的解法
    # def majorityElement(self, nums: List[int]) -> int:
    #     hashMap = {}
    #     for i in range(len(nums)):
    #         hashMap[nums[i]] = hashMap.get(nums[i], 0) + 1
    #     for key in hashMap:
    #         if hashMap[key] > len(nums) // 2:
    #             return key

nums = [3,2,3]
print(Solution().majorityElement(nums))
nums = [2,2,1,1,1,2,2]
print(Solution().majorityElement(nums))
