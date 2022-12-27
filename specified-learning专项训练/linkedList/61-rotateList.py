# 61. Rotate List
# Given the head of a linked list, rotate the list to the right by k places.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional

class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head == None:
            return head
        
        totalLen, tail = 1, head
        curr = head
        while curr.next != None:
            totalLen = totalLen + 1
            tail = curr.next
            curr = curr.next
        if k % totalLen == 0:
            return head
        step = totalLen - (k % totalLen) - 1
        curr = head
        while step > 0:
            curr = curr.next
            step = step - 1
        newHead = curr.next
        newEnd = curr
        tail.next = head
        newEnd.next = None
        return newHead

    # 我的方法
    # def getLength(self, head):
    #     count = 0
    #     while head != None:
    #         count = count + 1
    #         head = head.next
    #     return count

    # def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
    #     if head == None:
    #         return None
    #     totalNode = self.getLength(head)
    #     if k % totalNode == 0:
    #         return head
    #     cnt = k % totalNode
    #     slow = head
    #     fast = head
    #     prevEnd = None
    #     prevSlow = None
    #     while cnt > 0:
    #         fast = fast.next
    #         cnt = cnt - 1
    #     while fast != None:
    #         prevEnd = fast
    #         prevSlow = slow
    #         slow = slow.next
    #         fast = fast.next
    #     newHead = slow
    #     prevEnd.next = head
    #     prevSlow.next = None
    #     return newHead
