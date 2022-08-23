# 1029. Two City Scheduling
# A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.
# Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

from typing import List
# 这道题的思考是，假设全部人先都去b 价格就是sum1, 这个值是不会变的
# 然后再让一半的人不去b市 而是去a市 需要让这个值尽可能的小
# 所以我们可以 按 costb - costa来排序
# 最低的n个人飞往a
class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        costs.sort(key= lambda x: x[0] - x[1])
        total = 0
        for i in range(len(costs)):
            if i < len(costs) / 2:
                total = total + costs[i][0]
            else:
                total = total + costs[i][1]
        return total

costs = [[10,20],[30,200],[400,50],[30,20]]
print(Solution().twoCitySchedCost(costs))
costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
print(Solution().twoCitySchedCost(costs))
costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
print(Solution().twoCitySchedCost(costs))
