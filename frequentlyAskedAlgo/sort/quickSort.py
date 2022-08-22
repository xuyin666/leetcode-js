from typing import List
from random import randint

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def quickSort(l, r):
            if (l >= r): 
                return
            middle = partition(l, r)
            quickSort(l, middle - 1)
            quickSort(middle + 1, r)
        
        def partition(l, r):
            # 这两行主要是用来优化quickSort，因为如果一直选最后的值
            # 可能遇到最坏的情况，即数据已排好序
            # randomIndex = randint(l, r)
            # nums[randomIndex] , nums[r] = nums[r], nums[randomIndex]
            pivot = nums[r]
            p = l
            for i in range(l, r):
                if (nums[i] < pivot):
                    nums[i], nums[p] = nums[p], nums[i]
                    p = p + 1
            nums[p], nums[r] = nums[r], nums[p]
            return p

        quickSort(0, len(nums) - 1)
        return nums

tmp = Solution()
print(tmp.sortArray([1, 3, 2, 0, 9, 4]))