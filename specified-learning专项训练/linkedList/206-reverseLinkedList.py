# 206. Reverse Linked List
# Given the head of a singly linked list, reverse the list, and return the reversed list.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional

class Solution:
    # 递归 递归的办法
    # 有两种特殊情况，
    # 一是当它本身为None的时候，就直接返回None，无法反转
    # 再者当它的next为None的时候，代表着这是最后一个Node
    # 需要返回这个Node，这个Node将为新的head
    # 普通的情况，我们遍历到一个node 
    # node -> aNode <- bNode <-...<-newHead
    # 我们需要 node.next 为 aNode 
    # node.next.next = node 意味着让aNode指向node
    # 然后node暂时为最后一个node需要指向None
    # def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    #     if head == None:
    #         return None
    #     if head.next == None:
    #         return head
    #     newHead = self.reverseList(head.next)
    #     head.next.next = head
    #     head.next = None
    #     return newHead

    # 迭代，可以用双指针, prev,curr
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head
        while curr != None:
            tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp 
        return prev
    

    # 迭代 我的迭代方法
    # def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    #     aNode = head
    #     dummy = ListNode()
    #     while aNode != None:
    #         suiv = aNode.next
    #         tmp = dummy.next
    #         dummy.next = aNode
    #         aNode.next = tmp
    #         aNode = suiv
    #     return dummy.next