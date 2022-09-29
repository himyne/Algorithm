//문자열에서 대문자 개수를 찾아서 출력하는 문제
function solution(s){
  let answer=0;

  for(let x of s){
    //대문자로 변경했을 때 원래값이랑 다른 경우
    //if(x == x.toUpperCase()) answer++;
    if(x.charCodeAt() <= 90){
      answer++;
    }
  }
  return answer;
}

console.log(solution("KoreaTimeGood"))

//대문자 : 65~90(26개) 소문자 : 97~122