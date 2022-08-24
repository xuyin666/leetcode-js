# 861. Score After Flipping Matrix
# You are given an m x n binary matrix grid.
# A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).
# Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
# Return the highest possible score after making any number of moves (including zero moves).

from typing import List
class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
        # 先让每行第一列 变成1 如果他本来是0的话
        for i in range(len(grid)):
            if grid[i][0] == 0:
                for j in range(len(grid[0])):
                    if grid[i][j] == 0:
                        grid[i][j] = 1
                    else:
                        grid[i][j] = 0
        freq = []
        # 获取每列中1的数目
        for i in range(len(grid[0])):
            cmp = 0
            for j in range(len(grid)):
                if (grid[j][i] == 1):
                    cmp = cmp + 1
            freq.append(cmp)
        # 如果每列中1的数量更少 则要变化这列
        for i in range(len(grid[0])):
            if freq[i] < len(grid) - freq[i]:
                for j in range(len(grid)):
                    if grid[j][i] == 0:
                        grid[j][i] = 1
                    else:
                        grid[j][i] = 0
        res = 0
        for i in range(len(grid)):
            tmp = ""
            for j in range(len(grid[0])):
                tmp = tmp + str(grid[i][j])
            res = res + int(tmp, 2)
        return res

grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
print(Solution().matrixScore(grid))
grid = [[0]]
print(Solution().matrixScore(grid))
