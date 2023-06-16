function solution(brown, yellow) {    
    
    // 이 조합이 갈색 타일과 일치하는지 검사하는 함수
    const isMatch = (width, height) => {
         // 규칙 : 노란색 타일의(가로 길이 + 세로 길이) * 2 + 4 = 갈색 타일 개수
        const x = (width + height) * 2 + 4;
        
        if(x === brown) return true;
    }
    
    // yellow가 24인 경우 나올 수 있는 타일 조합
    // => (4x6) = 24 / (3x8) = 26 / (2x12) = 32 / (1x24) = 54
    for(let i = yellow; i >= 0; i--){
        
        if((yellow % i) === 0) {
        
            if(isMatch(i, yellow / i)) {
                return [i+2, (yellow/i) + 2]
            };
        }
    }
}