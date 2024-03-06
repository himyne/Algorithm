const getDiffCount = (bit, nextBit) => {
    let count = 0;
    const cur = '0'.repeat(nextBit.length - bit.length) + bit;
    
    for(let i=nextBit.length-1; i>=0; i--){
        if(cur[i] !== nextBit[i]){
            count++;
        }
    }
    return count;
}

function solution2(numbers){
    const answer = [];
    for(let i=0; i<numbers.length; i++){
        let j = 1;
        let minNum = 0;
        
               
        const bit = numbers[i].toString(2);
        const curNum = numbers[i]; 
        
        while(true){
            const nextBit = (curNum+j).toString(2);
            const count = getDiffCount(bit, nextBit);
            if(count === 2) {
                minNum = nextBit;
                break;
            };
            
            if(count === 1){
                minNum = nextBit;
                break;
            }
            j++;
        }
        answer[i] = [numbers[i], parseInt(minNum, 2), parseInt(minNum, 2) - numbers[i]];
    }
    return answer;
}

function createNumberArray(start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}
// 8 * 256 = 2048 => 2의 11승 + 2 = 2의 13승
//      2               4              6             8              10
//8(4), 16(8), 24(4), 32(16), 40(4), 48(8), 56(4), 64,(32), 72(4), 80(8), 
//8의 배수인데, 곱하는 수가 홀수이면 무조건 4, 짝수면 2가 얼마나 있느냐에 따라 8에 곱한 수가 된다.

// console.log(solution([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,31]))
// console.log(solution([37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]))
//2048: 2의 11승
// console.log(solution(createNumberArray(0, 32)))

function solution3 (numbers) {
    const answers = [];
    for(let i=0; i < numbers.length; i++){
        const cur = numbers[i];
        if(cur % 2 === 0){
            answers[i] = 1;
        } else {
            while(true){
                
            }
        }
    }
}

function solution(numbers){
  const answer = [];
  numbers.forEach(number => {
    if(number % 2 === 0){
      answer.push(number + 1);
    } else {
      number = "0" + number.toString(2);
      for(let i=number.length-1; i>=0; i--){
        if(Number(number[i]) === 0) {
          answer.push(parseInt(number.substring(0,i) + "10" + number.substring(i+2, number.length), 2))
          break;
        }
      }
    }
  })
  return answer;
}