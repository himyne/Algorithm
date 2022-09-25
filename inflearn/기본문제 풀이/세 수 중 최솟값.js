// 3개의 수가 주어졌을 때 최솟값을 리턴하는 문제
function solution(a, b, c){
    let answer;
    if(a<b) answer = a;
    else answer = b;
    if(answer > c) answer = c;
    return answer;
}

console.log(solution(6, 1, 2));
            
        