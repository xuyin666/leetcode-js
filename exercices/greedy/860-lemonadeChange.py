# 860. Lemonade Change
# At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
# Note that you do not have any change in hand at first.
# Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.


# 这道题依旧是贪心算法，判断是否能够成功找零，我们需要每次遇到二十时先找10块 和 5块
from typing import List
class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        five = 0
        ten = 0
        for i in range(len(bills)):
            if (bills[i] == 5):
                five = five + 1
            elif (bills[i] == 10):
                if (five == 0):
                    return False
                else:
                    five = five - 1
                    ten = ten + 1
            else:
                if (ten != 0):
                    if (five == 0):
                        return False
                    else:
                        five = five - 1
                        ten = ten - 1
                else:
                    if (five <= 2):
                        return False
                    else:
                        five = five - 3
        return True


bills = [5,5,5,10,20]
print(Solution().lemonadeChange(bills))
bills = [5,5,10,10,20]
print(Solution().lemonadeChange(bills))
