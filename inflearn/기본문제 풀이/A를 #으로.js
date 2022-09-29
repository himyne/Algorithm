//A를 만나면 #으로 바꾸어 출력하는 문제
function solution(str) {
  arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'A') {
      arr[i] = '#';
    }
  }
  let answer = arr.join('')
  return answer;
}
let input = "BANANA";
console.log(solution(input));

// for of 문 사용하는 방법 - 강의 답안
/*
function solution(s){
  let answer ="";
  for(let x of s){
    if(x === 'A') answer+='#';
    else answer+=x;
  }
  return answer;
}
let str = "BANANA"
console.log(solution(str));
*/
