const fs = require('fs')
let input = fs.readFileSync('/dev/stdin');

let count = 0

function d(data){
  const str = data.toString()
  const arr = Array.from(str)
  if(data<100 | arr[2]-arr[1] == arr[1]-arr[0]){
  return true
}
}

  for (let i=1; i<=input; ++i){
    if (d(i)){
      count++;
    }
  }
  console.log(count)