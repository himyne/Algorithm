//길이가 서로 다른 막대 세개로 삼각형을 만들 수 있는지 여부 출력
function solution(a, b, c){
  let max, answer;
  let sum = a+b+c;
  if(a>b) max = a;
  else max = b;
  if(max < c) max = c;
  
  if(sum-max <= max) answer = "YES"
  else answer = "NO"
  return answer;
}

console.log(solution(4, 7, 11));