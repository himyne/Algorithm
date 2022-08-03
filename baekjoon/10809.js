//문자열 - 알파벳 찾기
const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('');
const result = []

for(let i = 97; i<=122; ++i){
  let alphabet = String.fromCharCode(i)
  let answer = input.indexOf(alphabet)
  result.push(answer)
}
for(let i=0; i<26; ++i){
console.log(result[i])
}