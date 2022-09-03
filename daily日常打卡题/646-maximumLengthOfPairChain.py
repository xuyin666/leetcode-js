# 646. Maximum Length of Pair Chain
# You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.
# A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.
# Return the length longest chain which can be formed.
# You do not need to use up all the given intervals. You can select pairs in any order.

from typing import List
class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key= lambda x: x[1])
        maxLen = 0
        tmp = float("-inf")
        for i in range(len(pairs)):
            if tmp < pairs[i][0]:
                tmp = pairs[i][1]
                maxLen = maxLen + 1
        return maxLen

pairs = [[1,2],[2,3],[3,4]]
print(Solution().findLongestChain(pairs))
pairs = [[1,2],[7,8],[4,5]]
print(Solution().findLongestChain(pairs))
pairs = [[-6,9],[1,6],[8,10],[-1,4],[-6,-2],[-9,8],[-5,3],[0,3]]
print(Solution().findLongestChain(pairs))
pairs = [[9,10],[9,10],[4,5],[-9,-3],[-9,1],[0,3],[6,10],[-5,-4],[-7,-6]]
print(Solution().findLongestChain(pairs))

