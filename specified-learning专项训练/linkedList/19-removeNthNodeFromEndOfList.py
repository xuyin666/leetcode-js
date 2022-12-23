# 19. Remove Nth Node From End of List
# Given the head of a linked list, remove the nth node from the end of the list and return its head.


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional        
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        aNode = dummy
        bNode = head
        while n > 0:
            bNode = bNode.next
            n = n - 1
        while bNode != None:
            aNode = aNode.next
            bNode = bNode.next
        aNode.next = aNode.next.next
        return dummy.next

# 这道题可以选择用两个指针，他们之间的距离为N
# 比如说 bNode 在 aNode前两个
# 当bNode到达末尾的时候，aNode到达末尾倒数第N个
# 需要用一个dummy Node
# 需要删除倒数第N个的时候，需要在第N个前面才能删除

