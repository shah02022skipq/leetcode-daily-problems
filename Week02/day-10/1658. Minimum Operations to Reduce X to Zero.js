/**
 * You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 var minOperations = function(nums, x) {
    const target = nums.reduce((a, b) => a + b, 0)-x
     if (target==0){return nums.length}
     if(target<0){return -1}
        let l = 0;
        let r = 0;
        let windowSum=0
        maxlength=-1
        while(r<nums.length){
            windowSum += nums[r]
            r++
            while(windowSum>=target){
                if(windowSum==target){
                    maxlength=Math.max(maxlength,r-l)   
                }
                windowSum -= nums[l]
                l++
            }
        }

        return maxlength==-1?-1:nums.length-maxlength
};