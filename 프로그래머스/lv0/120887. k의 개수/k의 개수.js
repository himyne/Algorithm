function solution(i, j, k) {
    let num = '';
    for(let k=i; k<=j; k++){
        num += k;
    }
    return [...num].filter(v => +v === k).length;
}