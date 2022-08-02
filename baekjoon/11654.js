const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString();

const result = input.charCodeAt();

console.log(result)