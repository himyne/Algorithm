// function solution(word) {
//     const alph = ['A', 'E', 'I', 'O', 'U'];
    
//     let count = 0;
//     let answer;
//     let result = false;
    
//     const dfs = (str) => {
        
//         if(str === word) {
//             answer = count;
//             result = true;
//             return;
//         }
        
//         if(str.length === 5 || result) return;
//         for(let i=0; i<alph.length; i++){
//             const nextWord = str + alph[i];
//             count++;
//             dfs(nextWord);
//         }
//     }
//     dfs('');    
    
//     return answer;
// }
function solution(word) {
    const words = gererateAllWords();
    return words.indexOf(word) + 1;
}


function gererateAllWords() {
    const letters = ['A', 'E', 'I', 'O', 'U'];
    const LEN = letters.length;
    const words = [];
    for(let i = 0; i < LEN; i++) {
        words.push(letters[i]);
        for(let j = 0; j < LEN; j++) {
            words.push(letters[i] + letters[j]);
            for(let k = 0; k < LEN; k++) {
                words.push(letters[i] + letters[j] + letters[k]);
                for(let l = 0; l < LEN; l++) {
                    words.push(letters[i] + letters[j] + letters[k] + letters[l]);
                    for(let m = 0; m < LEN; m++) {
                        words.push(letters[i] + letters[j] + letters[k] + letters[l] + letters[m]);
                    }
                }
            }
        }
    }
    return words;
}
/*


A
AA
AAA
AAAA
AAAAA    
AAAAE    
AAAAI
AAAAO
AAAAU    
AAAE    
AAAI    
AAAO    
AAAU    
*/