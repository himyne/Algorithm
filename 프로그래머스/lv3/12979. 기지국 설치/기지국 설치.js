function solution(n, stations, w) {

    const connections = [];
    const result = [];
    let count = 0;
    
    // 기지국이 전파시키는 아파트 위치 저장
    for(let station of stations){
        let start = (station-w) < 1 ? 1 : station-w;
        let end = (station+w) > n ? n : station+w;
        connections.push([start, end])
    }
    
    // 기지국 사이사이에 도달하지 못한 아파트들
    for(let i=0; i<connections.length-1; i++){
        result.push(connections[i+1][0]-connections[i][1]-1)
    }
    
    // 앞쪽에 도달하지 못한 아파트들
    if(connections[0][0] !== 1) {
        result.push(connections[0][0]-1);
    }
    
    // 뒤쪽에 도달하지 못한 아파트들
    if(connections[connections.length-1][1] !== n){
        result.push(n-connections[connections.length-1][1])
    }
    
    const amount = w*2+1; 
    
    // 전파량으로 나눈 몫을 올림한 값들을 모두 더한다.
    return result.reduce((acc, cur) => acc += Math.ceil(cur/amount), 0);
}