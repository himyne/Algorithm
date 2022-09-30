// N개의 문자열 중 가장 긴 문자열을 출력하는 프로그램을 작성하시오
function solution(n,arr){
  let answer = Number.MAX_SAFE_INTEGER
  for(x of arr){
    if(x.length < answer){
      answer = x;
    }
  }
  return answer;
}
let arr = ['teacher', 'time', 'student', 'beautiful', 'good']
console.log(solution(5,arr));