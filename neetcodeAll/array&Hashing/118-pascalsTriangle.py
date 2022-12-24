# 118. Pascal's Triangle
# Given an integer numRows, return the first numRows of Pascal's triangle.
# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

from typing import List
class Solution:
    # Neetcode的方法
    # 他选择在前后补两个零 [0] + res[-1] + [0]
    # 第一行直接给出结果
    # 根据第一行推断下面的行
    def generate(self, numRows: int) -> List[List[int]]:
        res = [[1]]
        # 第一行已经自己填写了
        for _ in range(1, numRows):
            temp = [0] + res[-1] + [0]
            arr = []
            # 下一行比上一行多一个
            for col in range(len(res[-1]) + 1):
                arr.append(temp[col] + temp[col + 1])
            res.append(arr)
        return res

    # 我自己的方法
    # def generate(self, numRows: int) -> List[List[int]]:
    #     res = []
    #     for row in range(numRows):
    #         arr = []
    #         for col in range(row + 1):
    #             if col == 0 or col ==row:
    #                 arr.append(1)
    #             else:
    #                 arr.append(res[row - 1][col - 1] + res[row - 1][col])
    #         res.append(arr)
    #     return res

numRows = 5
print(Solution().generate(numRows))
numRows = 1
print(Solution().generate(numRows))
