/**
 * Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.
 */

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
 var numSubarraysWithSum = function(nums, goal) {
    let res = sum = 0;
    let m = new Map([
        [0, 1]
    ]);
    for (const e of nums) {
        sum += e;
        if (sum >= goal) res += m.get(sum - goal) || 0;
        m.set(sum, m.get(sum) + 1 || 1);
    }
    return res;
};