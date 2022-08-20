# 370. Range Addition
# You are given an integer length and an array updates where updates[i] = [startIdxi, endIdxi, inci].
# You have an array arr of length length with all zeros, and you have some operation to apply on arr. In the ith operation, you should increment all the elements arr[startIdxi], arr[startIdxi + 1], ..., arr[endIdxi] by inci.
# Return arr after applying all the updates.


from typing import List
# 差分法
class Solution:
    def getModifiedArray(self, length: int, updates: List[List[int]]) -> List[int]:
        diff = [0] * length
        for i in range(len(updates)):
            start, end, incre = updates[i][0], updates[i][1], updates[i][2]
            diff[start] = diff[start] + incre
            if (end + 1 < length):
                diff[end + 1] = diff[end + 1] - incre
        for i in range(length):
            if (i != 0):
                diff[i] = diff[i] + diff[i - 1]
        return diff

length = 5 
updates = [[1,3,2],[2,4,3],[0,2,-2]]
print(Solution().getModifiedArray(length, updates))
length = 10
updates = [[2,4,6],[5,6,8],[1,9,-4]]
print(Solution().getModifiedArray(length, updates))
