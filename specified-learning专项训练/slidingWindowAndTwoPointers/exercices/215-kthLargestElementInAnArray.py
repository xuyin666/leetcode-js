# 215. Kth Largest Element in an Array
# Given an integer array nums and an integer k, return the kth largest element in the array.
# Note that it is the kth largest element in the sorted order, not the kth distinct element.
# You must solve it in O(n) time complexity.

from typing import List
import heapq
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
        count = len(nums) - k
        while(count > 0):
            heapq.heappop(nums)
            count = count - 1
        return heapq.heappop(nums)

nums = [3,2,1,5,6,4]
k = 2
print(Solution().findKthLargest(nums, k))
nums = [3,2,3,1,2,4,5,5,6]
k = 4
print(Solution().findKthLargest(nums, k))
