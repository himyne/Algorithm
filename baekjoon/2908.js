//2908번 상수
const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const newArr = []
let num = ''
for (let i=0; i<input.length; i++){
  const arr = input[i].split('').map((item) => +item)
  let temp = arr[2]
  arr[2] = arr[0]
  arr[0] = temp  
  newArr.push(arr)
  }

const result = []

for (let j = 0; j < newArr.length; j++) {
  num = newArr[j].join('')
  result.push(num)
}
console.log(Math.max(...result))
