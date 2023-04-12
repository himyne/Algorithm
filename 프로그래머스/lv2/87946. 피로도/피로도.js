function solution(k, dungeons){
    const len = dungeons.length;
    const visited = new Array(len).fill(false);
    //1. 던전을 갈 수 있으면 visited를 true로 한다.
    //2. 갈 수 없으면 visited를 false로 하고 다음 던전으로 넘어간다.
    
    let count = 0;
    
    function dfs(idx, hp) {
        // 모든 던전을 다 탐색하면 탈출한다.
        for(let i= 0; i<len; i++){
            if(!visited[i] && dungeons[i][0] <= hp){
                visited[i] = true;
                dfs(idx+1, (hp - dungeons[i][1]));
                visited[i] = false;
            }
        }
        count = Math.max(idx, count);
    }
    
    dfs(0, k);
    
    return count;
}    
    
    



    
    
    
    
    
    
    
    
    
    
    
    

//     let answer = 0;
//     const visited = Array.from({length: dungeons.length}, () => false);
    
//     function dfs(k, count){
//         for(let i=0; i<dungeons.length; i++){
//             if(!visited[i] && dungeons[i][0] <= k) {
//                 visited[i] = true;
//                 dfs(k-dungeons[i][1], count + 1);
//                 visited[i] = false;
//             }
//         }
//         answer = Math.max(answer, count);
//     }
//     dfs(k,0);
//     return answer;
// }