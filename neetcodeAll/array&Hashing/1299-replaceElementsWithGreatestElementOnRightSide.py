# 1299. Replace Elements with Greatest Element on Right Side
# Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
# After doing so, return the array.

from typing import List
class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        rightMax = -1
        for i in range(len(arr) - 1, -1, -1):
            oldVal = arr[i]
            arr[i] = rightMax
            rightMax = max(oldVal, arr[i])
        return arr

    # def replaceElements(self, arr: List[int]) -> List[int]:
    #     rightMax = -1 
    #     newArr = [-1] * len(arr)
    #     for i in range(len(arr) - 2, -1, -1):
    #         newArr[i] = max(rightMax, arr[i + 1])
    #         rightMax = newArr[i]
    #     return newArr

    # 我自己的方法
    # def replaceElements(self, arr: List[int]) -> List[int]:
    #     newArr = [-1] * len(arr)
    #     maxVal = arr[-1]
    #     for i in range(len(newArr) - 2, -1, -1):
    #         if maxVal < arr[i + 1]:
    #             maxVal = arr[i + 1]
    #         newArr[i] = maxVal
    #     return newArr

arr = [17,18,5,4,6,1]
print(Solution().replaceElements(arr))
arr = [400]
print(Solution().replaceElements(arr))

# 这道题的思路画图分析
# newArr[0] = max(arr[1:end])
# newArr[1] = max(arr[2:end])
# newArr[2] = max(arr[3:end])
# ...
# 可以得出
# newArr[1] = max(arr[2], arr[3:end]) 
#           = max(arr[2], newArr[2])
# 初始化 rightMax = -1
# 可以不in-place来处理, 直接见解答

# 可以in-place 来处理
# oldVal = arr[i] 因为要比叫arr[i]和rightMax
# arr[i] = rightMax 直接在list上进行处理
# rightMax = max(oldval, arr[i]) 获取新的rightmax

