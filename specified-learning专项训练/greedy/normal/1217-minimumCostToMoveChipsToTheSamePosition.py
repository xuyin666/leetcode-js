# 1217. Minimum Cost to Move Chips to The Same Position
# We have n chips, where the position of the ith chip is position[i].
# We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:
# position[i] + 2 or position[i] - 2 with cost = 0.
# position[i] + 1 or position[i] - 1 with cost = 1.
# Return the minimum cost needed to move all the chips to the same position.

from typing import List
# 这道题比较有意思的点是 移动2 不花费
# 移动一格花费1
# 所以能做的的是 想象把双数硬币移动到0上 把单数硬币移动到1上
# 此时代价为0 只需要比较在0 和 1上的硬币数量
class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        pair = 0
        impair = 0
        for i in range(len(position)):
            if position[i] % 2 == 0:
                pair = pair + 1
            else: 
                impair = impair + 1
        return min(pair, impair)

position = [1,2,3]
print(Solution().minCostToMoveChips(position))
position = [2,2,2,3,3]
print(Solution().minCostToMoveChips(position))
position = [1,1000000000]
print(Solution().minCostToMoveChips(position))
