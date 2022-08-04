const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const newArr = []
const inputC = input[0]
let result = ''

for(let i=1; i<=inputC; ++i){
  const arr = input[i].split(' ').map((item) => item)
  newArr.push(arr)
}

for(let i=0; i < newArr.length; ++i){
  let reNum = newArr[i][0]
  let char = newArr[i][1].split('').map((item) => item)
  for(let j=0; j < char.length; ++j){
    for(let k=0; k < reNum; ++k){
      result += char[j];
    }
  }
  result += '\n'
} 
console.log(result)
