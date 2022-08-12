//2941 크로아티아 알파벳
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim(); 

let regExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;;
let result = input.replace(regExp,' ');
console.log(result.length);