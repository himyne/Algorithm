const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.replace("\r", ""));

let arr = [input[0], input[1], input[2], input[3]];
const rotationNum = +input[4];
const methods = input.slice(5);
const possible = [];

const checkPossible = () => {
  possible[0] = arr[0][2] === arr[1][6] ? false : true;
  possible[1] = arr[1][2] === arr[2][6] ? false : true;
  possible[2] = arr[2][2] === arr[3][6] ? false : true;
};

checkPossible();
// 회전 수만큼 반복
for (let i = 0; i < rotationNum; i++) {
  // 돌릴 톱니 번호와 방향
  const [num, dir] = methods[i].split(" ");

  // 자기 자신의 톱니바퀴를 일단 회전시킨다.
  let wheel = arr[num - 1];

  if (dir === "1") {
    arr[num - 1] = rightRotation(wheel);
  }
  if (dir === "-1") {
    arr[num - 1] = leftRotation(wheel);
  }
  // 1번 톱니 : 0 / 2번 톱니 : 0, 1 / 3번 톱니 : 1, 2 / 4번 톱니 : 2
  if (num === "1") {
    if (nextRotation(1, 0, dir)){
      if(nextRotation(2, 1, -dir)){
        nextRotation(3, 2, dir);
      }
    };
  }
  if (num === "2") {
    nextRotation(0, 0, dir)
    if (nextRotation(2, 1, dir)) {
      nextRotation(3, 2, -dir);
    }
  }
  if (num === "3") {
    nextRotation(3, 2, dir)
    if (nextRotation(1, 1, dir)){
      nextRotation(0, 0, -dir);
    } 
  }
  if (num === "4") {
    if(nextRotation(2, 2, dir)){
      if(nextRotation(1, 1, -dir)){
        nextRotation(0, 0, dir);
      }
    }
  }
  checkPossible();
}

// 옆의 톱니바퀴 회전시키는 함수
function nextRotation(i, j, dir) {
  if (!possible[j]) return false;
  if (dir === "1" || dir === 1) {
    arr[i] = leftRotation(arr[i]);
  } else {
    arr[i] = rightRotation(arr[i]);
  }
  return true;
}

// 시계방향으로 회전시키는 함수
function rightRotation(wheel) {
  const temp = wheel[wheel.length - 1];
  wheel = wheel.slice(0, wheel.length - 1);
  return temp + wheel;
}

// 반시계방향으로 회전시키는 함수
function leftRotation(wheel) {
  const temp = wheel[0];
  wheel = wheel.slice(1);
  return wheel + temp;
}

const answer = arr.map((v) => Number(v[0])).join("");
const result = +answer[0] + +answer[1] * 2 + +answer[2] * 4 + +answer[3] * 8;

console.log(result);
// 10010011  01010011    11100011    01010101
// 11100100, 01010011', '11110001', '01010101'