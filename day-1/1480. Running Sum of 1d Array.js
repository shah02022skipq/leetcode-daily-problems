/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let runningSum = []
    let res=0;
    for(let i=0 ; i<nums.length ; i++){
        res+=nums[i]
        runningSum.push(res)
    }
    return runningSum
};