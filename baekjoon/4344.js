let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = input[0] * 1;
const inputTestCase = [];

for(let i=1; i<=num; ++i){
  const arr = input[i].split(' ').map((item)=> +item);
  const newArr = []
  for(let i=1; i<=arr[0]; ++i){
    newArr.push(arr[i]);
  }
  const testCase = { 
    N: arr[0], 
    arr: newArr,
  };
  inputTestCase.push(testCase);
}
// 문제 풀기
for(let i=0; i<num; ++i){
  let count = 0;
  let sum = 0;

  for(let j=0; j<inputTestCase[i].N; ++j){
    sum += inputTestCase[i].arr[j];
    //끊임없는 변수 할당 문제 : const -> let으로 변경 후 해결
  }
  avg = sum/inputTestCase[i].N

  for(let k=0; k<inputTestCase[i].N; ++k){
    if (avg < inputTestCase[i].arr[k]){
      count++;
    }
  }
    result = (count/inputTestCase[i].N * 100).toFixed(3);
    console.log(result + "%");
}




