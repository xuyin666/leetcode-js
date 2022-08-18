# 215. Kth Largest Element in an Array
# Given an integer array nums and an integer k, return the kth largest element in the array.
# Note that it is the kth largest element in the sorted order, not the kth distinct element.
# You must solve it in O(n) time complexity.

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return None


nums = [3,2,1,5,6,4]
k = 2
nums1 = [3,2,3,1,2,4,5,5,6]
k1 = 4
print(Solution.findKthLargest(nums, k))
print(Solution.findKthLargest(nums1, k1))