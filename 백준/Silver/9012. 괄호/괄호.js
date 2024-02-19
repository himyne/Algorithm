const path = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const fs = require("fs");
const [T, ...arr] = fs.readFileSync(path).toString().trim().split('\n');

const solution = (arr) => {
  let left = 0;
  let right = 0;

  for(let i=0; i<arr.length; i++){
    if(left<right) return 'NO';
    if(arr[i] === '(') left++;
    if(arr[i] === ')') right++;
  }

  return left === right ? 'YES' : 'NO';
}

for(let i=0; i<T; i++){
  console.log(solution(arr[i]));
}

