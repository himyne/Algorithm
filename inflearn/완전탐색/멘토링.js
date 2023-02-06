// 4중 for문 문제

function solution(arr){
  let answer = 0;
  const M = arr.length;
  const N = arr[0].length;

  for(let i=1; i<=N; i++){
    for(let j=1; j<=N; j++){
      let count = 0;
       for(let k=0; k<M; k++){
         let pi = 0;
         let pj = 0;
        for(let s=0; s<N; s++){
          if(arr[k][s] === i) pi = s;
          if(arr[k][s] === j) pj = s;
        }
        if(pi > pj) count++;
       }
       if(count === M) answer++;
    }
  }
  return answer;
}



let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr))