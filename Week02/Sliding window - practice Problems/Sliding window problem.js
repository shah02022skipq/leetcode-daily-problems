

const largestSumSubArray = (arr, k) => {
    
    let sum=0 ;
    let pre= 0 ;
    let largeSum = 0 ;

    for(let i=0 ; i<arr.length ; i++){
        sum += arr[i]
        if(i+1 == k){  //if equal to window size for the first time  
            largeSum = Math.max(largeSum, sum)
        }
        else if(i+1 > k){ // if equal to window size after first time.
            sum -= arr[pre]
            largeSum = Math.max(largeSum, sum)
            pre += 1
        }
    }
    return largeSum
}



let arr = [2, 1, 5, 1, 3, 2]

console.log(largestSumSubArray(arr, 3))

