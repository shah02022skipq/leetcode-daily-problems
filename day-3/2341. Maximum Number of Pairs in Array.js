/**
 * You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var numberOfPairs = function(nums) {
    let answer = []
    let tobeRemoved = []
    let pairCount=0
    for(let i=0 ; i<nums.length ; i++){
        for(let j=i+1 ; j<nums.length ; j++){
            if(nums[i]==nums[j]){   
                // console.log("arr["+i+"]: "+ nums[i]+"  arr["+j+"]: "+nums[j])
                remove(nums, nums[i])
                remove(nums, nums[j-1])
                pairCount ++        
                i--
                // console.log(nums)
                break
            }            
        }
    }
    
    console.log(pairCount + "===========>"+nums.length)
    
    function remove(arr, value){
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr
    }
    
    answer.push(pairCount)
    answer.push(nums.length)
    
    return answer
};