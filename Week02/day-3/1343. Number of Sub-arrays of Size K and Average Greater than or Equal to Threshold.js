/**
 * Given an array of integers arr and two integers k and threshold, return the number of 
 * sub-arrays of size k and average greater than or equal to threshold.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
 var numOfSubarrays = function(arr, k, threshold) {
    
    let left = 0
    let right = 0
       
    let sub = []
    let arrNo = 0
    
    let count=0
    for(right ; right<arr.length ; right++){
        sub.push(arr[right])
        count++
        
        if(count==k){
            
            let sum = sub.reduce((tot, num) => tot+num, 0)
            let avg = sum/sub.length
            
            if(avg >= threshold)
                arrNo++
               
            count--
            sub.shift()
        }
    }
    
    return arrNo
    
};