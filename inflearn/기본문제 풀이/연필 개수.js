//인당 1자루씩 나누어 주는데 학생 N명일 때 필요한 다스 수(1다스 : 12자루)
//내가 푼 코드
function solution(N){
  let answer = parseInt(N/12);
  if(N % 12 > 0){
    answer++;
  }
  return answer;
}

console.log(solution(178));

//정답 코드
/*
  function solution(n){
    let answer = Math.ceil(n/12);
    return answer;
  }
  console.log(solution(178));
*/

//Math.ceil 
//소숫점을 올림해준다.