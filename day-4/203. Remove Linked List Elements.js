/**
 * Given the head of a linked list and an integer val, remove all the nodes of the 
 * linked list that has Node.val == val, and return the new head.

    Example 1:
    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]
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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    
    //head is not empty
    if(head != null){
        
        //if the whole list values is equal to val
        let temp = head
        while(head.val == val){
            head = head.next
            if(head == null) //when list become empty
                break
        }
        delete(temp) //to free the memory
        
        if(head == null) // if head became null means all list values == val
            return head
        
        //if there are more values in list
        let curr = head
        let prev = head
        
        while(curr != null){
            if(curr.val == val){
                prev.next = curr.next
                curr = curr.next
            }
            else{
                prev = curr
                curr = curr.next
            }
        }
        delete(curr)
        delete(prev)
    }
    
    return head
};