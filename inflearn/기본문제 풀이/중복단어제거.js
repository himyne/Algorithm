function solution(s) {
  const removedDuplicate = new Set(s);
  return [...removedDuplicate];
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
