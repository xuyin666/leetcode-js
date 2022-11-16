# 300. Longest Increasing Subsequence
# Given an integer array nums, return the length of the longest strictly increasing 
# subsequence

from typing import List

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        # dp[i] 是指从i到末尾最大的递增子序列，需要包括i
        # 意味着 nums[i]为最长递增子序列的最小值
        dp = [1] * len(nums)
        for i in range(len(nums) - 1, -1, -1):
            for j in range(i + 1, len(nums)):
                if nums[j] > nums[i]:
                    dp[i] = max(dp[i], 1 + dp[j])
        # print(dp)
        return max(dp)

nums = [10,9,2,5,3,7,101,18]
print(Solution().lengthOfLIS(nums))
nums = [0,1,0,3,2,3]
print(Solution().lengthOfLIS(nums))
nums = [7,7,7,7,7,7,7]
print(Solution().lengthOfLIS(nums))


# 这道题是动态规划题目
# 但是有一定的难度，需要找到合适的dp[i]
# dp[i] 是指从i到末尾最大的递增子序列，需要包括i
# 意味着 nums[i]为最长递增子序列的最小值
# 所以我们可以做的是 先遍历0 ... len(nums) - 1(i)
# dp[i]的初始值为 1 因为如果没有后续，那么它自己就是最长子序列
# 然后 我们比较 nums[i]和nums[j]
# 如果 nums[j]大于nums[i] 意味着nums[i]可以接到以j为起点序列中
# dp[i] = max(dp[i], 1 + dp[j]) 
# 1 + dp[j] 代表着新的可能的最长的子序列
