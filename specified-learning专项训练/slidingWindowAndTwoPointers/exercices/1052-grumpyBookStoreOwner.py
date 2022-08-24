# 1052. Grumpy Bookstore Owner
# There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store. You are given an integer array customers of length n where customers[i] is the number of the customer that enters the store at the start of the ith minute and all those customers leave after the end of that minute.
# On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.
# When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.
# The bookstore owner knows a secret technique to keep themselves not grumpy for minutes consecutive minutes, but can only use it once.
# Return the maximum number of customers that can be satisfied throughout the day.
from typing import List
class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        # 这道题反向思维来看
        # 先计算本来就不会生气时刻的所有值，然后计算老板不生气能留下的最多客户
        if minutes >= len(grumpy): return sum(customers)
        res = 0
        for i in range(len(grumpy)):
            if grumpy[i] == 0:
                res = res + customers[i]
        tmp = 0
        for i in range (0, minutes):
            if grumpy[i] == 1:
                tmp = tmp + customers[i]
        maxSum = tmp
        for i in range(minutes, len(grumpy)):
            if grumpy[i] == 1:
                tmp = tmp + customers[i]
            if grumpy[i - minutes] == 1:
                tmp = tmp - customers[i - minutes]
            maxSum = max(maxSum, tmp)
        res = res + maxSum
        return res

customers = [1,0,1,2,1,1,7,5]
grumpy = [0,1,0,1,0,1,0,1]
minutes = 3
print(Solution().maxSatisfied(customers, grumpy, minutes))
customers = [1]
grumpy = [0]
minutes = 1
print(Solution().maxSatisfied(customers, grumpy, minutes))
