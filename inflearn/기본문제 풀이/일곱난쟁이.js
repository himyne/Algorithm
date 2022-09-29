function solution(arr){
  let sum, rest, filtered;
  sum = arr.reduce((acc, v)=>acc+v,0)
  rest = sum-100;
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j] === rest){
        arr.splice(j,1); // 배열이 앞에서부터 지워지면 인덱스가 당겨짐
        arr.splice(i,1); // j 먼저 지워주고 i를 지우면 해결됨
        // 아니면 중복되는 난쟁이의 키가 없으니 filter를 사용하여 값 자체를 지워줘도 된다. 
        //filtered = arr.filter(x => x !== arr[i] && x !== arr[j])
      }
    }
  }
  return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]
console.log(solution(arr));

//arr.splice(1,2) - 1번 인덱스로부터 2개를 지워라