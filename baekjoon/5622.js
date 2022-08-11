//5622 다이얼
// if 문으로 해서 너무 복잡하게 코드를 짰다. 객체로 풀었어야 했다.
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("");

let sum = 0;
for(let i=0; i<input.length; i++){
  alphabet(input[i])
}

console.log(input==='' ? '' : sum);
function alphabet(a) {
  if ((a === "A") || (a === "B") || (a === "C")) {
    sum += 3;
  }else if ((a === "D") || (a === "E") || (a === "F")) {
    sum += 4;
  }else if ((a === "G") || (a === "H") || (a === "I")) {
    sum += 5;
  }else if ((a === "J") || (a === "K") || (a === "L")) {
    sum += 6;
  }else if ((a === "M") || (a === "N") || (a === "O")) {
    sum += 7;
  }else if ((a === "P") || (a === "Q") || (a === "R" )|| (a === "S")) {
    sum += 8;
  }else if ((a === "T") || (a === "U") || (a === "V")) {
    sum += 9;
  }  else if ((a === "W") || (a === "X") || (a === "Y" )|| (a === "Z")) {
    sum += 10;
  } 
  
}
// (객체 풀이)
/*
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let phone = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};
let result = 0;

for (let i = 0; i < input.length; i++) {
	for (let j = 2; j <= 9; j++) {
		if (phone[j].includes(input[i])) {
			result += j + 1;
			break;
		}
	}
}

console.log(result);
*/