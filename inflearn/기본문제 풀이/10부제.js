function solution(date, arr){
  let answer=0;
  for (let i of arr){
     if(i%10 === date){
      answer++;
     }
  }
  return answer;
}
let arr = [25, 23, 11, 47, 53, 17, 33]
console.log(solution(3,arr))