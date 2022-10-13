/**
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    
    let map = new Map()
    for(let i= 0 ; i<nums.length ; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1)
        }else{
            map.set(nums[i], 1)
        }
    }
        
    let res = []
    let keys = [...map.keys()]
    for(let i=0 ; i<map.size ; i++){
        let x = keys[i]
        if(map.get(x) > 1)
            res.push(x)
    }
  
    return res
};