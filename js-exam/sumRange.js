function sumAll(arr) {
    let result = 0;
    
    let first = Math.min(...arr);
    let end = Math.max(...arr);
    console.log(first + ":" + end);
    
    for(let i = first; i <= end; i++){
        result += i;
    }
    
    return result;
}

console.log( sumAll([10, 1, 5, 3, 100]) );