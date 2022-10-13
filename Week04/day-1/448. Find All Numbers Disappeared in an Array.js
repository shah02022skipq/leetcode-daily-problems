/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    
    for(let num of nums){
        let index = Math.abs(num) - 1
        nums[index] = -Math.abs(nums[index])
    }  
    
    nums = nums.map((itm, i) => itm>0 && i+1).filter(x=>x>0)
    return nums
    // return m1(nums)
};

/*Method - 1*/
const m1 = (nums) => {
    let map = new Map()
    nums.forEach((itm, i) => console.log(i, ' ', i+1))    
    
    for(let i=0 ; i<len ; i++){
        if(!nums.has(i+1))
            nums.set(i+1, i)
    }
    
    nums = nums.filter((x, i) => i>=len && x)  
    return map
}