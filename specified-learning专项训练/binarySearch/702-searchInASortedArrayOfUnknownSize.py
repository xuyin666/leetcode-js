# 702. Search in a Sorted Array of Unknown Size
# This is an interactive problem.
# You have a sorted array of unique elements and an unknown size. You do not have an access to the array but you can use the ArrayReader interface to access it. You can call ArrayReader.get(i) that:
# returns the value at the ith index (0-indexed) of the secret array (i.e., secret[i]), or
# returns 231 - 1 if the i is out of the boundary of the array.
# You are also given an integer target.
# Return the index k of the hidden array where secret[k] == target or return -1 otherwise.
# You must write an algorithm with O(log n) runtime complexity.

# """
# This is ArrayReader's API interface.
# You should not implement it, or speculate about its implementation
# """
class ArrayReader:
   def get(self, index: int) -> int:
    return

class Solution:
    def search(self, reader: 'ArrayReader', target: int) -> int:
        # 这道题的思路是先找到右边界 然后在去二分法查找 那个值
        l = 0 
        r = 1
        # 代表着 target没有在这个区间内
        while target > reader.get(r):
            l = r 
            r = r * 2
        r = r + 1
        while l < r:
            mid = l + (r - l)//2
            if reader.get(mid) == target:
                return mid
            elif reader.get(mid) > target:
                r = mid
            else:
                l = mid + 1
        return -1

