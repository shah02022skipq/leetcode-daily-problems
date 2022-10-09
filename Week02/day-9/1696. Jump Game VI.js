/**
 * You are given a 0-indexed integer array nums and an integer k.

You are initially standing at index 0. In one move, you can jump at most k steps forward without going outside the boundaries of the array. That is, you can jump from index i to any index in the range [i + 1, min(n - 1, i + k)] inclusive.

You want to reach the last index of the array (index n - 1). Your score is the sum of all nums[j] for each index j you visited in the array.

Return the maximum score you can get.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxResult = function(nums, k) {
    sumArray = Array(nums.length).fill(0);
    let n = nums.length;
    sumArray[n-1] = nums[n-1];
    let maxIndStore = [n-1];
    
    for (let i = n-2; i>=0; i--){
        while (maxIndStore.length>0 && maxIndStore[0]>i+k){
            maxIndStore.shift();
               }
        sumArray[i] = nums[i]+sumArray[maxIndStore[0]];
        
        while(sumArray[i]>=sumArray[maxIndStore[maxIndStore.length-1]]){
            maxIndStore.pop();
        }
        maxIndStore.push(i);
    }
    
    
    return sumArray[0];  
};