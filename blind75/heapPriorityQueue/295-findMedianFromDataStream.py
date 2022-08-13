# 295. Find Median from Data Stream
# The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.
# For example, for arr = [2,3,4], the median is 3.
# For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
# Implement the MedianFinder class:
# MedianFinder() initializes the MedianFinder object.
# void addNum(int num) adds the integer num from the data stream to the data structure.
# double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

import heapq
class MedianFinder:

    def __init__(self):
        # in smallHeap, we need that it returns the max value
        # it contains the value smaller than bigHeap
        self.smallHeap = []
        # in the bigHeap, we need that it returns the min value
        # it contains the value bigger than smallHeap
        self.bigHeap = []
        heapq.heapify(self.smallHeap)
        heapq.heapify(self.bigHeap)

    def addNum(self, num: int) -> None:
        heapq.heappush(self.smallHeap, num * - 1)

        # to check if the last element we pushed in the small heap
        # is small than the min of the bigHeap
        if (self.smallHeap and self.bigHeap and 
            -1 * (self.smallHeap[0]) > (self.bigHeap[0])):
            val = heapq.heappop(self.smallHeap)
            heapq.heappush(self.bigHeap, val * -1)

        # if the smallHeap has too many elements
        if (len(self.smallHeap) > len(self.bigHeap) + 1):
            val = heapq.heappop(self.smallHeap)
            heapq.heappush(self.bigHeap, val * - 1)

        # if the bigHeap has too many elements
        if (len(self.bigHeap) > len(self.smallHeap) + 1):
            val = heapq.heappop(self.bigHeap)
            heapq.heappush(self.smallHeap, val * - 1)

    def findMedian(self) -> float:
        if (len(self.bigHeap) == len(self.smallHeap)):
            return (self.bigHeap[0] + (-1) * self.smallHeap[0])/2
        elif (len(self.bigHeap) > len(self.smallHeap)):
            return self.bigHeap[0]
        else:
            return (-1) * self.smallHeap[0]

        


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()


# Input
# ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
# [[], [1], [2], [], [3], []]
# Output
# [null, null, null, 1.5, null, 2.0]