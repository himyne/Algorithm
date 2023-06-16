const solution = (param0) => {
  const answer = [];
  const [EIGHT_BYTE, FOUR_BYTE, TWO_BYTE, ONE_BYTE] = ['########', '####', '##', '#'];
  const DOT = '.'
  for (let i = 0; i < param0.length; i++) {
    
    if (param0[i] === "LONG") answer.push(EIGHT_BYTE, EIGHT_BYTE);
    else if (param0[i] === "INT") answer.push(EIGHT_BYTE);

    // lONG 과 INT 타입이 아니면
    else {
      let string = "";

      // while문 돌기
      while (true) {
        
        const next = i+1;
        let len = string.length;

        if (param0[i] === "FLOAT") {
          if (param0[next] === 'INT' || param0[next] === 'LONG') string += (FOUR_BYTE + DOT.repeat(4 - len));
          else string += FOUR_BYTE
        }
        if (param0[i] === "SHORT") {
          if (param0[next] === 'FLOAT') string += TWO_BYTE + DOT.repeat(2 - len);
          else if (param0[next] === 'INT' || param0[next] === 'LONG') string += (TWO_BYTE + DOT.repeat(6 - len));
          else string += TWO_BYTE
        }
        if (param0[i] === "BOOL") {
          if (param0[next] === "SHORT") string += (ONE_BYTE + DOT);
          else if (param0[next] === "FLOAT") string += (ONE_BYTE + DOT.repeat(3 - len));
          else if (param0[next] === 'INT' || param0[next] === 'LONG') string += (ONE_BYTE + DOT.repeat(7 - len));
          else string += "#";
        }

        len = string.length; 

        // 문자열 길이가 8이면 break
        if (len === 8) {
          answer.push(string);
          break;
        }
        // 마지막 인덱스까지 오면 break
        if (i === param0.length-1){
          answer.push(string + DOT.repeat(8-len));
          break;
        }
        // 인덱스 값 증가
        i++;
      }
    }
  }

  if(answer.length > 16) return 'HALT'
  return answer.join(',');
};

console.log(solution(["BOOL", "BOOL"]));
// "##......"
console.log(solution(["BOOL", "SHORT"]));
// "#.##...."
console.log(solution(["BOOL", "FLOAT"]));
// "#...####"
console.log(solution(["BOOL", "BOOL", "FLOAT"]));
// "##..####"
console.log(solution(["BOOL", "SHORT", "FLOAT"]));
// "#.######"
console.log(solution(["BOOL", "INT"]));
// "#.......,########"
console.log(solution(["SHORT", "BOOL"]));
// "###....."
console.log(solution(["FLOAT", "SHORT"]));
// "######.."
console.log(solution(["INT", "INT", "BOOL", "SHORT", "LONG"]));
//"########,########,#.##....,########,########"
console.log(solution(["INT", "SHORT", "FLOAT", "INT", "BOOL"]));
// "########,##..####,########,#......."
console.log(solution(["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"]));
// "########,#.......,########"
console.log(solution(["BOOL","LONG","SHORT","LONG","BOOL","LONG","BOOL","LONG","SHORT","LONG","LONG"]));
// "HALT"