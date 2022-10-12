/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {

    // return hashingMethod(nums) /*Method 1, time => O(N) & space => O(N)*/     
    // return summationFormula(nums) /*Method 1, time => O(N) & space => O(1), but can
    // occer overflow*/
    return xor(nums) /*Method 1, time => O(N) & space => O(1)*/
    
};

/*Method - 3*/
const xor = (nums) => {
    let aXOR = nums[0]
    for(let i=1 ; i<nums.length ; i++){
        aXOR = aXOR ^ nums[i]
    }
    
    let nXOR = 0
    for(let i=1 ; i<nums.length+1 ; i++){
        nXOR = nXOR ^ i
    }
    
    return aXOR ^ nXOR
}


/*Method - 2*/
const summationFormula = (nums) => {
    let n = nums.length
    let Sn = n*(n+1)/2
    let Sa = nums.reduce((tot, i) => tot+i)
    
    return Sn-Sa
}


/*Method - 1*/
const hashingMethod = (nums) =>{
    let hash = Array(nums.length+1).fill(false)
    
    for(let i=0 ; i<hash.length ; i++){
        if(nums.includes(i)){
            hash[i] = true
        }
    }
    
    for(let i= 0 ; i<hash.length ; i++){
        if(hash[i]==false)
            return i
    }
        
}