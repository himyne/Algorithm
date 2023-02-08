function solution(M, arr) {
  const N = arr.length;
  let answer = 0;
  arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  for(let i=0; i<N; i++){
    let money = M - ((arr[i][0]/2) + arr[i][1]);
    let cnt = 1;
    for(let j=0; j<N; j++){
      if(j!==i && arr[j][0] + arr[j][1] <= money){
        money -= (arr[j][0] + arr[j][1])
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
