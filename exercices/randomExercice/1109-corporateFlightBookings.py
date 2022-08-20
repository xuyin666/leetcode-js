# 1109. Corporate Flight Bookings
# There are n flights that are labeled from 1 to n.
# You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi] represents a booking for flights firsti through lasti (inclusive) with seatsi seats reserved for each flight in the range.
# Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i.

from typing import List
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        # 这题就是用差分法，只修改了两个端点的值
        diff = [0] * n
        for i in range(len(bookings)):
            start, end, seats = bookings[i][0], bookings[i][1], bookings[i][2]
            diff[start - 1] = diff[start - 1] + seats
            if (end < n):
                diff[end] = diff[end] - seats
        for i in range(1, len(diff)):
            diff[i] = diff[i] + diff[i - 1]
        return diff

bookings = [[1,2,10],[2,3,20],[2,5,25]]
n = 5
print(Solution().corpFlightBookings(bookings, n))
bookings = [[1,2,10],[2,2,15]]
n = 2
print(Solution().corpFlightBookings(bookings, n))
