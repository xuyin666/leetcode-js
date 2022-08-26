# 1695. Maximum Erasure Value
# You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.
# Return the maximum score you can get by erasing exactly one subarray.
# An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

from typing import List
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        maxSum = 0
        l, r = 0, 0
        freq = {}
        tmpSum = 0
        while r < len(nums):
            freq[nums[r]] = freq.get(nums[r], 0) + 1
            tmpSum = tmpSum + nums[r]
            while freq[nums[r]] > 1:
                tmpSum = tmpSum - nums[l]
                freq[nums[l]] = freq[nums[l]] - 1
                l = l + 1
            maxSum = max(maxSum, tmpSum)
            r = r + 1            
        return maxSum


nums = [4,2,4,5,6]
print(Solution().maximumUniqueSubarray(nums))
nums = [5,2,1,2,5,2,1,2,5]
print(Solution().maximumUniqueSubarray(nums))
