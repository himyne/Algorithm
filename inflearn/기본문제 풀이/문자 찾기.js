//주어진 문자열에서 특정 알파벳 개수 찾기
function solution(str, s){
  let answer=0;

  for(let i of str){
    if(i === s) answer++;
  }
  return answer;
}

let str = 'COMPUTERPROGRAMMING'
console.log(solution(str, 'R'))

/* split 메서드 이용하는 방법
function solution(str, s){
  let answer=s.split(s).length;
  return answer-1;
}

let str = 'COMPUTERPROGRAMMING'
console.log(solution(str, 'R'))
*/
//R로 문자열을 쪼갠 다음 1을 빼주면 된다.