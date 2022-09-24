/**
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    
    /*Algorithn*/
    //1- firstly we have to remove the duplicate values
    //2- then we have to sort the array in descending order    
    //3- then we will check if  2th index (3rd value) is not -1
    //   if not then we will return that value 
    //   else we will return the first value
    
    /*Compelxity analysis
        Array.prototype.sort() : Since it uses MergeSort, it has O(n log n) with O(n) for             memory.
        
        .Set() : Time complexity be O(n) because javascript would iterate throughout the                whole numsArray before adding it to the set?

         I'm assuming the space complexity is O(n) because we are adding values (the values            in numsArray) to Set(). 
    */
    
    /*Solution*/
    let uniq = [... new Set(nums)]
    
    uniq = uniq.sort((a, b) => b-a)
    
    if(uniq.indexOf(uniq[2]) != -1){
       return uniq[2]
    }else{
        return uniq[0]
    }
    
    // console.log(uniq)
};