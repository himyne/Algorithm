//문자열 - 단어 공부
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

  let lowStr = input[0].toLowerCase();
  let obj = {};

  for (let i = 0; i < lowStr.length; i++) {
    if (obj[lowStr[i]] === undefined) {
      obj[lowStr[i]] = 1;
    } else {
      obj[lowStr[i]] += 1;
    }
  }
  let result = "";
  let count = 0;

  for (char in obj) {
    if (obj[char] > count) {
      count = obj[char];
      result = char.toUpperCase();
    } else if (obj[char] === count) {
      result = "?";
    }
  }
  console.log(result);

/* 두번째 방식 - 더 빠른 코드
let input = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97] ++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
*/