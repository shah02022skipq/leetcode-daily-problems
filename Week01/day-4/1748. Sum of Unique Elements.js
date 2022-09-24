/**
 * You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
   
    let dup = nums.filter(((itm, idx) => idx!=nums.lastIndexOf(itm)))
    
    console.log(dup)
    let sum = 0
    if(dup.length != 0){ //means no duplicates       
        let flag = false
        for(let i=0 ; i<nums.length ; i++){
            for(let j=0 ; j<dup.length ; j++){
                if(nums[i] != dup[j]){
                    if(j==dup.length-1)
                        sum += nums[i]
                }else{
                    break
                }

            }

        }    
    }else{
        sum = nums.reduce((total, itm) => total+itm)
    }
    
    
   return sum
};