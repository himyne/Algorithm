function solution(r1, r2){
    let answer = 0;
        for(let i=1; i <= r2; i++){
            const outerY = Math.floor(Math.sqrt(r2**2 - i**2))
            let innerY = 0;
            
            if(r1 > i){
                innerY = Math.ceil(Math.sqrt(r1**2 - i**2));
            }
            
            answer += (outerY - innerY + 1);
        }
        return answer * 4;
}
