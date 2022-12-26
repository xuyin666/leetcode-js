# 21. Merge Two Sorted Lists
# You are given the heads of two sorted linked lists list1 and list2.
# Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
# Return the head of the merged linked list.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        # tail 标记最末尾的值
        tail = dummy
        while list1 != None and list2 != None:
            if list1.val < list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next
        # 如果有一个list到了结尾，可以直接用tail连着剩下的那个list，因为他本来就是有序的
        if list1 != None:
            tail.next = list1
        elif list2 != None:
            tail.next = list2
        return dummy.next

    # 我自己的做法
    # def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    #     dummy = ListNode()
    #     aNode = dummy
    #     while list1 != None and list2 != None:
    #         if list1.val <= list2.val:
    #             aNode.next = list1
    #             aNode = aNode.next
    #             list1 = list1.next
    #         else:
    #             aNode.next = list2
    #             aNode = aNode.next
    #             list2 = list2.next
    #     while list2 != None:
    #         aNode.next = list2
    #         aNode = aNode.next
    #         list2 = list2.next
    #     while list1 != None:
    #         aNode.next = list1
    #         aNode = aNode.next
    #         list1 = list1.next
            
    #     return dummy.next