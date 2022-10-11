/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums = nums.sort((a, b) => a-b)
    let res = []
    
    for(let i = 0 ; i<nums.length ; i++){
       
        if(i>0 && nums[i] === nums[i-1]) continue
            
        let l = i+1
        let r = nums.length-1
        
        while(l < r){
            let threeSum = nums[i]+nums[l]+nums[r]
            
            if(threeSum < 0){
                l++
            }else if(threeSum > 0){
                r--
            }else{
                res.push([nums[i], nums[l], nums[r]])
                l++
                while(nums[l] == nums[l-1] && l<r)
                    l++
                
            }
                
        }
        
        
        
    }
    
    return res    

};