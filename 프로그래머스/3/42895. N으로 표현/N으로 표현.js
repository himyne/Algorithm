function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());
  if (N === number) return 1;
  dp.forEach((set, i) => {
    if (i !== 0) set.add(Number(String(N).repeat(i)));
  });
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < i; j++) {
      for (const origin of dp[j]) {
        for (const value of dp[i - j]) {
          dp[i].add(origin + value);
          dp[i].add(origin - value);
          dp[i].add(origin * value);
          dp[i].add(Math.floor(origin / value));
        }
      }
    }
    if (dp[i].has(number)) return i;
  }
  return -1;
}