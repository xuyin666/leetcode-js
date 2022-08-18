# 973. K Closest Points to Origin
# Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

# The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

# You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        return False


# points = [[1,3],[-2,2]], k = 1
# points1 = [[3,3],[5,-1],[-2,4]], k1 = 2
# print(Solution.kClosest(points, k))
# print(Solution.kClosest(points1, k1))


