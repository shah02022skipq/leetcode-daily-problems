/**
 * You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i:

If nums[i] is positive, move nums[i] steps forward, and
If nums[i] is negative, move nums[i] steps backward.
Since the array is circular, you may assume that moving forward from the last element puts you on the first element, and moving backwards from the first element puts you on the last element.

A cycle in the array consists of a sequence of indices seq of length k where:

Following the movement rules above results in the repeating index sequence seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...
Every nums[seq[j]] is either all positive or all negative.
k > 1
Return true if there is a cycle in nums, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var circularArrayLoop = function(nums) {
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (detectCycleDFS(i, i, nums[i] > 0)) return true;
    }
    
    return false;
    
    function detectCycleDFS(currIndex, prevIndex, isPos) {
    if (nums[currIndex] === 0) {
        return currIndex != prevIndex; // If there is a self-repeating cycle, we return false
    }

    // Return false if there is a mismatch of directions
    if (isPos != (nums[currIndex] > 0)) return false;

    const moves = nums[currIndex];

    nums[currIndex] = 0; // mark the index as being visited

    const nextIndex = (currIndex + (moves % n) + n) % n;
    const isCycle = detectCycleDFS(nextIndex, currIndex, isPos);

    nums[currIndex] = moves;

    return isCycle;    
}
    
};

