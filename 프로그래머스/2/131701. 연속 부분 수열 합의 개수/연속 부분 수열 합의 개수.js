function solution(elements) {
    const doubleArr = [...elements, ...elements];
    const len = elements.length;
    
    const set = new Set();
    
    for(let i=1; i<=len; i++){
        for(let j=0; j<len; j++){
            const sum = doubleArr.slice(j, j+i).reduce((acc, cur) => acc+cur);
            set.add(sum);
        }
    }
    
    return [...set].length;
}