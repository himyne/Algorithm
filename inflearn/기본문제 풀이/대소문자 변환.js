//소문자는 대문자로 대문자는 소문자로 변환하여 출력
function solution(s){
  let answer ='';
  for(let x of s){
    num = x.charCodeAt();
    if(num >= 65 && num <= 90) answer += x.toLowerCase();
    else answer += x.toUpperCase()
  }
  return answer
}

console.log(solution('StuDY'));