function solution(jobs) {
    // 출력: 각 작업별로 요청부터 종료까지 걸린 시간을 더하고 LENGTH로 나눔
    // 걸린 시간 = 종료 시간 - 요청 시간(job[0])
    // 종료 시간 = 시작 시간 + 소요 시간(job[1)
    // 1. jobs 배열을 우선순위별로 정렬한다.
    // 2. 만약 같은 요청 시점에 들어온 경우 작업 시간이 더 적은 애부터 실행
    // 3. 정렬된 배열을 순회하면서 종료 시간을 구하고 소요시간을 새로운 배열에 저장
    
    const answer = [];
    const len = jobs.length;
    let time = 0;
    
    jobs.sort((a,b) => {
        if(a[0] === b[0]){
            return a[1]-b[1];
        }
        return a[0] - b[0];
    })
    
    let current = jobs[0][0];
    
    while(jobs.length){
        const [start, time] = jobs.shift();
        
        if(current < start) current = start;
        
        let finish = time + current;
        answer.push(finish - start);
        current = current + time;
        
        let i=0;
        while(true){
            if(i >= jobs.length || jobs[i][0] > finish) break;
            i++
        }
        
        const arr = sliceAndSortArr(jobs, i);
        for(let j=0; j<i; j++){
            jobs[j] = arr[j];
        }
    }
    
    return Math.floor(answer.reduce((a,b) => a+b,0)/len);
}

function sliceAndSortArr (arr, idx) {
    let slicedArr = arr.slice(0,idx);
    return slicedArr.sort((a,b) => a[1] - b[1])
}