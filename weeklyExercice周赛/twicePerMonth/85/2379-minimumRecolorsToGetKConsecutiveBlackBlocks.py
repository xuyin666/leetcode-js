# 6156. Minimum Recolors to Get K Consecutive Black Blocks
# You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.
# You are also given an integer k, which is the desired number of consecutive black blocks.
# In one operation, you can recolor a white block such that it becomes a black block.
# Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.
# 用双指针，在k区间里面，求得最少的W
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        count = 0
        for i in range(k):
            if (blocks[i] == 'W'):
                count = count + 1
        minVal = count        
        for i in range(1, len(blocks) - k + 1):
            if (blocks[i - 1] == 'W') :
                count = count - 1
            if (blocks[i + k - 1] == 'W'):
                count = count + 1
            minVal = min(minVal, count)
        return minVal

blocks = "WBBWWBBWBW"
k = 7
print(Solution().minimumRecolors(blocks, k))
blocks = "WBWBBBW" 
k = 2
print(Solution().minimumRecolors(blocks, k))

