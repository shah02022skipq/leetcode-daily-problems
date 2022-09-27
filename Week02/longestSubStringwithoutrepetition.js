
const logestSubStringWithoutRepition = (str) => {
    let arr = str.split('')

    let winStart = 0
    let maxWindowSize = 0
    let set = []
    for(let winEnd=0 ; winEnd<arr.length ; winEnd++){
        
        while(set.includes(arr[winEnd])){
            set.shift() //remove from start
            winStart ++ 
        }
        set.push(arr[winEnd])
        maxWindowSize = Math.max(maxWindowSize, set.length)
    }

    return maxWindowSize
}

let str = 'geeksforgeeks'

console.log(logestSubStringWithoutRepition(str))
