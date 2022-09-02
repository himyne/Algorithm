const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = +input[0]
const B = +input[1]
const C = +input[2]

let amount = Math.floor(A / (C-B)) +1
console.log(B >= C ? -1 : amount)
