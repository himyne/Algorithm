function solution(numbers, target) {
    let count = 0;
    // [1,1,1,1,1]
    
    const dfs = (num, depth) => { // dfs(1,1) dfs(2,2) dfs(3,3) dfs(4,4) dfs(5,5)
        if(depth === numbers.length) {
            if(num === target) count++;
            return;
        };
        dfs(num+numbers[depth], depth +1); // dfs(1,1) , dfs(2,2), dfs(3,3), dfs(4,4), dfs(5,5)
        dfs(num-numbers[depth], depth +1); // dfs(-1,1), dfs(0,2), dfs(1,3), dfs(2,4), dfs(3,5)
    }
    dfs(0, 0);
    return count;
}  
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
//     let answer=0;
    
//     dfs(0,0);
    
//     function dfs(index, sum) {
//         if(index === numbers.length){
//             if(sum === target){
//                 answer++;
//             }
//             return;
//         }
//         dfs(index+1, sum + numbers[index]);
//         dfs(index+1, sum - numbers[index]);
//     }
//     return answer;
// }