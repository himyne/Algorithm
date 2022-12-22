function solution(s) {
  s = s.toLowerCase();
  x = [...s].reverse().join('');
  if(s === x){
    return 'YES'
  } else return 'NO'
}

let str = "goooG";
console.log(solution(str));
