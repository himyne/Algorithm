function solution(friends, gifts) {
    const friendsIndexes = friends.reduce((acc, cur, index) => ({...acc, [cur]: index}), {});
    const giftNums = friends.reduce((acc, cur) => (
        {...acc, [cur]: Array.from({length: friends.length}).fill(0)}
    ), {});
    
    gifts.forEach((gift) => {
        const [giver, taker] = gift.split(' ');
        const takerIndex = friendsIndexes[taker];
        const giverIndex = friendsIndexes[giver];
        
        giftNums[giver][takerIndex]++;
        giftNums[giver][giverIndex]++;
        giftNums[taker][takerIndex]--;
    })
    
    let result = friends.reduce((acc, cur) => ({...acc, [cur]: 0}),{});
    
    friends.forEach((friend, index) => {
        const giftNumArr = giftNums[friend];
        const myGiftNum = giftNumArr[index];
        const compareArr = giftNums[friend];
        for(let i=0; i<compareArr.length; i++){
            if(i !== index) {
                const friendName = friends[i];
                const compareGiftNum = giftNums[friendName][i];
                if(compareArr[i] > giftNums[friendName][index]) result[friend]++;
                if(compareArr[i] === giftNums[friendName][index] && myGiftNum > compareGiftNum) result[friend]++; 
            }
        }
    })

    let answer = 0;
    Object.values(result).forEach((item) => {if(item > answer) answer = item});
    return answer;
}