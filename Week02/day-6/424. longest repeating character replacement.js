/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
 */


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    
    //     let largeSum = 0
    //     let set = []
        
    //     for(let i = 0 ; i<s.length ; i++){
    //         set.push(s.charAt(i)) 
    //         if(replacements(set) <= k){
    //             largeSum = Math.max(largeSum, set.length)  
                
    //         }else{
    //             set.shift()
    //             largeSum = Math.max(largeSum, set.length)
    //             // console.log(largeSum)
    //             // set.push(s.charAt(i))
    //             // console.log(set)
    //         }
    //         // console.log(replacements(set))
        
            let maxCharCount = 0, // Num of times the maximum occurring char appears
            left = 0,
            right = 0;
          const dict = {};
          while (right < s.length) {
            const c = s[right]; // Get the character
            dict[c] ? dict[c]++ : (dict[c] = 1); // Update the dictionary
            maxCharCount = Math.max(dict[c], maxCharCount); // Update the maximum occuring char count
    
            // Check to see if our k-changes constraint is maintained
            if (right - left + 1 - maxCharCount > k) {
              dict[s[left]]--;
              left++; // Shorten the left
            }
            right++; // Expand the right
          }
          return right - left; // Return the window size
    };
    
    // const replacements = (arr) => {
    //     const count = {};    
    //     arr.forEach(element => {
    //       count[element] = (count[element] || 0) + 1;
    //     });
       
    //     let valSorted = Object.values(count).sort((a, b) => count[b] - count[a]).join('');
    //     console.log("S: ", valSorted)
    //     if(valSorted.length > 1 ){        
    //         let moves = parseInt(valSorted.substring(0, valSorted.length-1).split('').reduce((tot, num) => tot+num))
    //         console.log(moves)
    //         return moves
    //     }else{
    //         return valSorted.length
    //     }
    // }