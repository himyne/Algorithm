function solution(new_id) {
  let answer, regexr;
  answer = new_id.toLowerCase();
  regexr = /[^\d\a-z\-\_\.]/g;
  answer = answer.replace(regexr, "");
  regexr = /\.{2,}/g;
  answer = answer.replace(regexr, ".");
  regexr = /^\.|\.$/g;
  answer = answer.replace(regexr, "");

  if (answer === "") {
    answer = "a";
  }
  if (answer.length >= 16) {
    answer = answer.substr(0, 15);
    regexr = /\.$/g;
    answer = answer.replace(regexr, "");
  }
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }
  return answer;
}

// 모법 풀이
function solution(new_id) {
  const answer = new_id
      .toLowerCase() // 1
      .replace(/[^\w-_.]/g, '') // 2
      .replace(/\.+/g, '.') // 3
      .replace(/^\.|\.$/g, '') // 4
      .replace(/^$/, 'a') // 5
      .slice(0, 15).replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

