/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of
 *  each number sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
    var left = 0;
    var right = nums.length-1;
    var arr = new Array(right+1)
    
    for(let i=nums.length-1; i>=0; i--){
        var l = nums[left] ** 2;
        var r = nums[right] **2;
        if(l>=r){
            arr[i] = l
            left++;
        }else{
            arr[i] = r
            right--
        }        
    }
    
    return arr
};