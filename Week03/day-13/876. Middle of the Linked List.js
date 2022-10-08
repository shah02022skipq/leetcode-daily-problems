/**
 *  Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    
    let curr = head
    let len = 0
    while(curr != null){
        curr = curr.next
        len ++
    }
        
        
    let currLen=0
    while(head != null){
        currLen++
        
        if(currLen*2 == len+1){
            break;
        }
        else if(currLen*2 == len){
            head = head.next
            break;
        }
        
        head = head.next
    }
        
    return head
};