function solution(arr) {
  const answer = [];
  arr.forEach((item) => {
    reversedNum = String(item).split("").reverse().join("");
    if (findNum(reversedNum)) answer.push(deleteZero(reversedNum));
  });
  return answer.filter(item => item !== '1').map(item=>+item).join(' ');
}

function deleteZero(num) {
  while(1){
    if(num[0] === '0') num = num.slice(1);
    if(num[0] !== '0') break;
  }
  return num;
}

function findNum(num) {
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (Number.isInteger(num / i)) return false;
  }
  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

/** 모범 답안
function isPrime(num){
  if(num===1) return false;
  for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
      if(num%i===0) return false;
  }
  return true;
}
function solution(arr){
  let answer=[];
  for(let x of arr){
      let res=Number(x.toString().split('').reverse().join(''));
      if(isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
*/