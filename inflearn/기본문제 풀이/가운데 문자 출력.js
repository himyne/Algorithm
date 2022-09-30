// 소문자로 된 단어가 입력되면 그 단어의 가운데 문자를 출력
// 단어 길이가 짝수일 경우 가운데 2개의 문자를 출력
function solution(s){
  let answer, len = parseInt(s.length / 2);
  if(s.length%2 !== 0) answer = s[len]
  else answer = s[len-1] + s[len]
  return answer;
}

console.log(solution('teacher'))