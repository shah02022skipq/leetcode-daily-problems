/**
 * Given an integer array nums, you need to find one continuous subarray that if you only sort this 
 * subarray in ascending order, then the whole array will be sorted in ascending order.

   Return the shortest such subarray and output its length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    
    if (nums.length < 2) return 0 //if there is only one element in the nums array
    let tempArr = [...nums].sort((a, b) => a - b); //making tempArr as reference array as we are sorting it 
    
    
    let left = 0
    let right = nums.length - 1
    let start = null 
    let end = null;
    
    while (left < right) {
        
        //checking the element of nums from left with the sorted reference array , tempArr
        if (nums[left] == tempArr[left]){
            left++;
        } 
        else if (nums[left] != tempArr[left]){
            start = left;
        } 
        
        //checking the element of nums from right with the sorted reference array, tempArr
        if (nums[right] == tempArr[right]) {
            right--;
        }            
        else if (nums[right] != tempArr[right]) {
            end = right;   
        }            
        
        //checking if there is any unsorted number present in the array nums
        if (start !== null && end !== null) 
            break;
    }
    
    // if the array is already sorted, means there is no any unsorted element in the nums array so
    // we are returing 0
    if (start === null && end === null) return 0;
    
    //otherwise we are returning the length of the continuous subarray that is unsorted.
    return (end - start) + 1;
};