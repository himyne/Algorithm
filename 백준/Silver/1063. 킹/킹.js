const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const location = input[0];

const [kingLo, stoneLo, len] = location.split(' ');

const move = input.slice(1).map(v => v.replace('\r', ''));

// ASCII - 64

const locationConvertToMap = (location) => {
  const [row, col] = location;
  return [Math.abs(64 - row.charCodeAt()), Number(col)];
}

const mapConvertToLocation = (map) => {
  const [row, col] = map;
  return [String.fromCharCode(64 + row), Number(col)].join('');
}

const king = locationConvertToMap(kingLo);
const stone = locationConvertToMap(stoneLo);

const direction = {
  R: [1,0], 
  L: [-1,0],
  B: [0,-1],
  T: [0,1],
  RT: [1,1],
  LT: [-1,1],
  RB: [1,-1],
  LB: [-1,-1],
}

for (let i=0; i<len; i++){
  const curDir = move[i];
  const dir = direction[curDir];
  const kX = king[0] + dir[0];
  const kY = king[1] + dir[1];
  const sX = stone[0] + dir[0];
  const sY = stone[1] + dir[1];

  if(kX === stone[0] && kY === stone[1]){
    if(sX > 0 && sX < 9 && sY > 0 && sY < 9 && kX < 9 && kX > 0 && kY < 9 && kY > 0){
      [stone[0], stone[1]] = [sX, sY]; 
      [king[0], king[1]] = [kX, kY];
    }
  } else {
    if(kX < 9 && kX > 0 && kY < 9 && kY > 0){
      [king[0], king[1]] = [kX,kY];
    }
  }
}

console.log(mapConvertToLocation(king));
console.log(mapConvertToLocation(stone));
