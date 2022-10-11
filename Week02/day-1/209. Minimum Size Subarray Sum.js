/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    
    let runSum=0
    let winStart = 0
    let maxlen = Number.MAX_VALUE
    let flag = false
    
    for(let winEnd=0 ; winEnd<nums.length ; winEnd++){
        runSum += nums[winEnd]
        
        while(runSum >= target){
            flag = true 
           
            maxlen = Math.min(maxlen, (winEnd - winStart) + 1)
            runSum -= nums[winStart]            
            winStart ++ 
            
        }
        
    }
    
    if(flag == true)
        return maxlen
    else
        return 0
};