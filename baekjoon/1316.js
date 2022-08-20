let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
let count = 0
const inputC = input[0]

for(let i=1; i<=inputC; i++){
  let newInput = input[i].split('')
  for(let j=0; j<newInput.length; j++){
    if(newInput[j] == newInput[j+1]){
      newInput[j] = j
    }
  }
  if(hasDuplicates(newInput)){
    count++
  }
}

function hasDuplicates(arr) {
  return new Set(arr).size == arr.length;
}

console.log(count)
