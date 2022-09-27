function solution(arr){
  let answer=[];
  let sum = 0, min = Number.MAX_SAFE_INTEGER;
  for(let x of arr){
    if(x%2 === 1){
      sum += x;
      if(x<min) min=x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
arr = [12, 77, 38, 41, 53,  92, 85];
console.log(solution(arr));

/* 내가 푼 풀이
function solution(arr){
  let answer=0, min;
  let newArr = [];
  //for of 문 이용해도 된다.
  for(let i=0; i<arr.length; i++){ //for(let x of arr)
    if(arr[i]%2 !== 0){
      newArr.push(arr[i]);
      answer += arr[i];
    }
  }
  console.log(answer);
  min = Math.min(...newArr);
  return min;
}
let arr = [12, 77, 38, 41, 53,  92, 85]
console.log(solution(arr))
*/