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
        if head == None: return None
        dummy = ListNode()
        dummy.next = head
        slow = dummy
        fast = head
        while n > 0:
            fast = fast.next
            n = n - 1
        while fast != None:
            fast = fast.next
            slow = slow.next
        slow.next = slow.next.next
        return dummy.next
        # if head == None: 
        #     return None
        # lenList = 0
        # curr = head
        # while curr != None:
        #     lenList = lenList + 1
        #     curr = curr.next
        # dummy = ListNode()
        # dummy.next = head
        # slow = dummy
        # count = lenList - n
        # while count > 0 :
        #     slow = slow.next
        #     count = n - 1
        # slow.next = slow.next.next
        # return dummy.next