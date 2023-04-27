function solution(genres, plays) {    
    // 1. 속한 노래가 많이 재생된 장르 -> 각 장르의 plays 합이 큰 순
    // 2. 장르 내에서 많이 재생된 노래 -> 장르 내에서 plays가 큰 순
    // 3. 장르 내에서 재생 횟수가 같은 노래 -> 고유번호(인덱스)가 낮은 순
    const album = {};
    
    genres.forEach((v,index) => {
        if(!album[v]){
            album[v] = [[plays[index], index]];
        } else{
            album[v].push([plays[index], index])
        }
    })
    
    const arr = Object.entries(album)
    arr.sort((a,b) => {
        return b[1].reduce((acc,cur) => acc += cur[0],0) - a[1].reduce((acc,cur) => acc += cur[0],0);
    })
    
    arr.map((v) => v[1].sort((a,b) => b[0]-a[0]));
    arr.map((v) => v[1].length > 1 ? v[1].splice(2) : v[1]);
    return arr.map(v => v[1].map(k => k[1])).flat();
}