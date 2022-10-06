/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed
 *  by all the odd integers.

    Return any array that satisfies this condition.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    
    let prev = 0
    let next = 1
    
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i]%2 != 0){
            prev = i
            next = i+1
            break;
        }
    }
    
    while(next < nums.length){
        
        if(nums[next]%2==0){
            let x = nums[next]
            let y = nums[prev]
            
            nums[prev] = x
            nums[next] = y
            
            
            prev++
        }
        
        
        next++
    }
    
    return nums
};