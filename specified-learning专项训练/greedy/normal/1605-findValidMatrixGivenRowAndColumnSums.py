# 1605. Find Valid Matrix Given Row and Column Sums
# You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.
# Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies the rowSum and colSum requirements.
# Return a 2D array representing any matrix that fulfills the requirements. It's guaranteed that at least one matrix that fulfills the requirements exists.

# 这道题的思路就是在 row = i, col = j的地方 填充 rowSum[i], colSum[j]的最小值 
from typing import List
class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        res = [[0 for i in range(len(colSum))] for j in range(len(rowSum))]
        for i in range(len(rowSum)):
            for j in range(len(colSum)):
                minVal = min(rowSum[i], colSum[j])
                res[i][j] = minVal
                rowSum[i] = rowSum[i] - minVal
                colSum[j] = colSum[j] - minVal
        return res


rowSum = [3,8]
colSum = [4,7]
print(Solution().restoreMatrix(rowSum, colSum))
rowSum = [5,7,10]
colSum = [8,6,8]
print(Solution().restoreMatrix(rowSum, colSum))
rowSum = [14,9]
colSum = [6,9,8]
print(Solution().restoreMatrix(rowSum, colSum))
rowSum = [1,0]
colSum = [1]
print(Solution().restoreMatrix(rowSum, colSum))
rowSum = [0]
colSum = [0]
print(Solution().restoreMatrix(rowSum, colSum))
