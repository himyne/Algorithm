// 소문자로 된 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램
function solution(s){
  let answer='';
  for(let i=0; i<s.length; i++){
    if(s.indexOf(s[i]===i)) answer += s[i]
  }
  return answer;
}

console.log(solution('ksekkset'))