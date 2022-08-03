//문자열 - 숫자의 합
const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputC = input[0]
const arr = input[1].split('').map((item) => +item)
let result = 0

for(let i=0; i<inputC; ++i){
  result += arr[i]
}
console.log(result)