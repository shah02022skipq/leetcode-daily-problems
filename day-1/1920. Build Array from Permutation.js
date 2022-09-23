/**
 * Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    let len = nums.length
    for(let i=0 ; i<len ; i++){
        nums.push(nums[nums[i]])
    }
    nums = nums.splice(len)
    return nums
};