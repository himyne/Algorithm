function solution(s) {
    // abc abc ded e
    const a = [];
    if(s.length === 1) return 1;
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
            if(result[k].join('') === result[k+1].join('')){
                count = count + 1;
            }
            if(result[k].join('') !== result[k+1].join('')){
                answer.push(count===1 ? '' : count, result[k].join(''));
                count = 1
            }
            if(k === result.length-2){
                answer.push(count===1 ? '' : count, result[k+1].join(''))
            }
        }
        a.push(answer.join('').length);
    }
    return Math.min(...a)
}

