//입력받은 문자열에서 소문자를 대문자로 바꾸어 출력하기
function solution(s){
  let answer='';
  for(let x of s){
    if(x !== x.toUpperCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

console.log(solution('ItIsTimeToStudy'))

/* 2. 아스키코드로 푸는 방법(String.fromCharCode() - 소문자와 대문자의 아스키코드 번호 차이는 32)
function solution(s){
  let answer='';
  for(let x of s){
    let num = x.charCodeAt();
    if(num>=97 && num<=122) answer += String.fromCharCode(num-32);
    else answer += x;
  }
  return answer;
}

console.log(solution('ItIsTimeToStudy'))
*/

// 3, s.toUpperCase() 를 이용하는 방법 : 젤 빠름
// function solution(s){
//   let answer = s.toUpperCase();
//   return answer;
// }

// console.log(solution('ItIsTimeToStudy'))