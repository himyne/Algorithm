function solution(before, after) {
    const str = before + after;
    const sortedStr = [...str].sort();
    for(let i=0; i<sortedStr.length; i +=2){
        if(sortedStr[i] !== sortedStr[i+1]) return 0
    }
    return 1
}