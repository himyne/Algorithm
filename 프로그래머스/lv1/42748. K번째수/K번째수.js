function solution(array, commands) {
    const result = [];
    commands.forEach(command => {
        const [i,j,k] = command;
        const arr = array.slice(i-1,j);
        arr.sort((a,b)=>a-b);
        result.push(arr[k-1]);
    })
    
    return result
}