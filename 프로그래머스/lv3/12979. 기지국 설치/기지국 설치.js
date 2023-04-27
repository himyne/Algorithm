function solution(n, stations, w) {

    const connections = [];
    const result = [];
    let count = 0;
    
    for(let station of stations){
        let start = (station-w) < 1 ? 1 : station-w;
        let end = (station+w) > n ? n : station+w;
        connections.push([start, end])
    }
    
    for(let i=0; i<connections.length-1; i++){
        result.push(connections[i+1][0]-connections[i][1]-1)
    }
    
    if(connections[0][0] !== 1) {
        result.push(connections[0][0]-1);
    }
    
    if(connections[connections.length-1][1] !== n){
        result.push(n-connections[connections.length-1][1])
    }
    
    const amount = w*2+1;
    
    return result.reduce((acc, cur) => acc += Math.ceil(cur/amount), 0);
}