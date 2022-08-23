# 1710. Maximum Units on a Truck
# You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
# numberOfBoxesi is the number of boxes of type i.
# numberOfUnitsPerBoxi is the number of units in each box of the type i.
# You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
# Return the maximum total number of units that can be put on the truck.

from typing import List
# 问最多可以装载的总数，所以我需要尽可能的先选择大容量的箱子
# 只需要把箱子以容量大小拍个序
class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key = lambda x: x[1], reverse=True)
        res = 0
        for i in range(len(boxTypes)):
            if truckSize <= 0:
                break
            if truckSize >= boxTypes[i][0]:
                res = res + boxTypes[i][0] * boxTypes[i][1]
                truckSize = truckSize - boxTypes[i][0]
            else:
                res = res + truckSize * boxTypes[i][1]
                truckSize = 0
        return res


boxTypes = [[1,3],[2,2],[3,1]]
truckSize = 4
print(Solution().maximumUnits(boxTypes, truckSize))
boxTypes = [[5,10],[2,5],[4,7],[3,9]]
truckSize = 10
print(Solution().maximumUnits(boxTypes, truckSize))
