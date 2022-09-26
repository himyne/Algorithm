//7개의 수가 주어지면 가장 작은 수 출력하는 프로그램
function solution(arr){
  let answer, min = Number.MAX_SAFE_INTEGER; // 안정적인 가장 큰 정수값
  for(let i=0; i < arr.length; i++){
    if(arr[i] < min) min=arr[i];
  }
  answer = min;
  return answer;
}
let arr = [5, 3, 7, 11, 2, 15, 17]
console.log(solution(arr))