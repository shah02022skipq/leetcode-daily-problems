
const smallestWindowSize = (arr, k) => {
    
    let minWindowSize = Number.MAX_VALUE
    let runningSum = 0 
    let winStart = 0
    for(let winEnd=0 ; winEnd<arr.length ; winEnd++){
        runningSum += arr[winEnd]
        
        while(runningSum >= k){
            minWindowSize = Math.min(minWindowSize, (winEnd - winStart + 1))
            runningSum -= arr[winStart]
            winStart ++ ;
        }
    }

    return minWindowSize
}


let arr = [4,2,2,7,8,1,2,8,1,0]
console.log(smallestWindowSize(arr, 3))