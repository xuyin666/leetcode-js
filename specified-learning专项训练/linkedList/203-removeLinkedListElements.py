# 203. Remove Linked List Elements
# Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional        
class Solution:
    # 递归
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        if head == None:
            return None
        # 去除掉这个node之后的值
        head.next = self.removeElements(head.next, val)
        # 如果当前的值 == val，就返回head.next,
        # 否则可以返回head，因为他自己值不为val
        if head.val == val:
            return head.next
        else:
            return head

    # 迭代
    # def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
    #     dummy = ListNode(0)
    #     dummy.next = head
    #     prev = dummy
    #     curr = head
    #     while curr != None:
    #         if curr.val != val:
    #             prev = curr 
    #             curr = curr.next
    #         else:
    #             prev.next = curr.next
    #             curr = curr.next
    #     return dummy.next