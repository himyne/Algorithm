function solution(s) {
    if(s.length === 1) return 1;
    const lenArr = [];
    
    for(let i=1; i<s.length; i++) {
        const answer = [];
        const result = []; 
        
        const str = [...s];
        for(let j=0; j<s.length/i; j++){
            const slicedArr = str.splice(0, i);
            result.push(slicedArr)
        }
        
        let count = 1;
        for(let k=0; k<result.length-1; k++){
            const a = result[k].join('');
            const b = result[k+1].join('');
            
            if(a === b) count++;
            
            if(a !== b){
                answer.push(count===1 ? '' : count, a);
                count = 1;
            }
            if(k === result.length-2) answer.push(count===1 ? '' : count, b);
        }
        lenArr.push(answer.join('').length);
    }
    return Math.min(...lenArr)
}