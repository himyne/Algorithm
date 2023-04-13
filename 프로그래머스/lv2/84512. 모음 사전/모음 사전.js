function solution(word) {
    const alph = ['A', 'E', 'I', 'O', 'U'];
    
    let count = 0;
    let answer;
    let result = false;
    
    const dfs = (str) => {
        
        if(str === word) {
            answer = count;
            result = true;
            return;
        }
        
        if(str.length === 5 || result) return;
        for(let i=0; i<alph.length; i++){
            const nextWord = str + alph[i];
            count++;
            dfs(nextWord);
        }
    }
    dfs('');    
    
    return answer;
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