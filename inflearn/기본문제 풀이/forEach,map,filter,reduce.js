//forEach
//첫번째 인수는 값이고 두번째 인수는 인덱스 값이다.
a = [10, 11, 12, 13, 14, 15];
a.forEach(function(v, i){
  console.log(v, i);
});
//10 0 11 1 12 2 13 3 14 4 15 5
//map
//새로운 배열은 원본 배열과 길이가 같다
a = [10, 11, 12, 13, 14, 15];
let answer = a.map(function(v,i){
  if(v%2 == 0) return v;
},[1,2]);
console.log(answer) 
// [ 10, undefined, 12, undefined, 14, undefined ]

//filter
//원본 배열과 길이가 같지 않아도 원하는 값만 리턴해준다.
a = [10, 11, 12, 13, 14, 15];
answer = a.filter(function(v,i){
  return v%2 == 0;
},[1,2]);
console.log(answer) 
//[10, 12, 14]

//reduce
//리턴값이 배열이 아닌 하나의 값이다.
//보통 알고리즘 문제에서 sum을 구할때만 주로 사용한다.
a = [10, 11, 12, 13, 14, 15];
answer = a.reduce(function(acc,v){
  return acc+v;
}, 0);
console.log(answer);