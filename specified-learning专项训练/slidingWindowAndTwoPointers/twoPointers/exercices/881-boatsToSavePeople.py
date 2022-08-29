# 881. Boats to Save People
# You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
# Return the minimum number of boats to carry every given person.

from typing import List
class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        l = 0
        r = len(people) - 1
        res = 0
        while l <= r:
            if people[l] + people[r] <= limit:
                l = l + 1
                r = r - 1
            else:
                r = r - 1
            res = res + 1
        return res

people = [1,2]
limit = 3
print(Solution().numRescueBoats(people, limit))
people = [3,2,2,1]
limit = 3
print(Solution().numRescueBoats(people, limit))
people = [3,5,3,4]
limit = 5
print(Solution().numRescueBoats(people, limit))
