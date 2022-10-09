
largestSumSubArray = (arr, k) => {
    
    let startWin = 0
    let runningSum = 0
    let maxSumArr = 0
    for(let endWin=0 ; endWin<arr.length ; endWin++){
        runningSum += arr[endWin]
        if(endWin >= k-1){
            maxSumArr = Math.max(runningSum, maxSumArr)
            runningSum -= arr[startWin]
            startWin ++ 
        }
    }

    return maxSumArr 
}

let arr = [3, 5, 2, 1, 7]
console.log(largestSumSubArray(arr, 2))
