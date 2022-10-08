/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
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
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    //1- Get midddle of the list by using a fast and slow pointer, slow will increment once while fast will be 
    // moving twice in one step, in this way, fast will go to the end of the linked list and we would find our mid on slow.
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
   
    //2- Reverse the end of the list, we would reverse the linked list from the mid to the end of the liked list
    // and then will be comparing each element of the two halves of the original liked list, i.e. from the head to the mid
    // and from the mid to the last (that is reversed list).
   
    let reversed = null
    let next = null
    let curr = slow
 
    while(curr){
  	    next = curr.next;
		curr.next = reversed;
		reversed = curr;
		curr = next;
    }
   
    //3- Then traverse both lists to compare the values of the first half of the original likedlist from the start
    // to the mid and from the mid to the end of the original linkedlist which is reversed list returning false if 
    // any of   them aren't equal
    while(reversed){
        if(reversed.val !== head.val) return false
        reversed = reversed.next
        head=head.next
    }
    
    return true
};