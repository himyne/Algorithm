function solution(numbers, direction) {
    if(direction === "right") {
        const tmp = numbers[numbers.length-1];
        numbers = numbers.slice(0, numbers.length-1);
        numbers.unshift(tmp);
        return numbers;
    }
    if(direction === "left"){
        const tmp = numbers[0];
        numbers = numbers.slice(1, numbers.length);
        numbers.push(tmp);
        return numbers;
    }
}