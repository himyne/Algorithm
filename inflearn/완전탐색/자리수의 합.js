function solution(n, arr) {
  let answer, max = Number.MIN_SAFE_INTEGER;
  for(x of arr) {
    let sum=0, tmp = x;
    while(tmp){
      sum +=(tmp%10);
      tmp=Math.floor(tmp/10);
    }
  }
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

function mySolution(n,arr) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let newArr = [...String(arr[i])];
    answer.push(newArr.reduce((acc, cur) => (acc += Number(cur)), 0));
  }
  const max = Math.max(...answer);
  let fromIndex = answer.indexOf(max);
  let indexArr = [];
  console.log(answer)
  while(fromIndex != -1)  {
    indexArr.push(fromIndex)
    fromIndex = answer.indexOf(max, fromIndex+1);
  }

  let result = [];
  for(let i=0; i<indexArr.length; i++){
    result.push(arr[indexArr[i]])
  }
  return Math.max(...result)
}
