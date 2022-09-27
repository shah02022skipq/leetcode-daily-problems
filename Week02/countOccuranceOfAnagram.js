function checkStringsAnagram(a, b) {
    let flag = false

    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){       
       return flag
    }
    
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');

    if(str1 === str2){
       flag = true
    }
    else { 
       flag = false
    }

    return flag
}

const countAnaOccurance = (text, word) => {

    let ana = word.split('')
    let txt = text.split('')
    let set = []
    let occurance = 0
    for(let winEnd=0 ; winEnd<txt.length ; winEnd++){
        
        set.push(txt[winEnd])

        if(set.length == ana.length){
           if(checkStringsAnagram(set.toString().split(',').join(''), word)){
                while(set.length != 0){
                    set.shift()
                }
                occurance ++ 
            }
            else{
                set.shift()
            }
        }
    }
    return occurance
}

let text = 'gotxgtoxotgxdogt '
let word = 'got'
console.log(countAnaOccurance(text, word))
// console.log(checkStringsAnagram(word, 'gds'))