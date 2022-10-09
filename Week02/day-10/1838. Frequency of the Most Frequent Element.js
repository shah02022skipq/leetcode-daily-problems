/**
 * The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    var sum = 0;
    var start = 0;
    var maxLen = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if (sum + k >= nums[i] * (i - start + 1)) {     //valid condition: accumulated sum + k >= current element * (window size)
            maxLen = Math.max(maxLen, i - start + 1);
        } else {
            sum = sum - nums[start];
            start = start + 1;
        }
    }
    return maxLen;
};