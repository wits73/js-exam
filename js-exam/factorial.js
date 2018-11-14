function factorialFor(num){
    result = 1;
    for(let i = 1; i <= num; i++)
        result *= i;
    return result;
}

function factorialRecursive(num){
    if (num == 0){
        return 1;
    }  
    return num * factorialRecursive(num - 1);
}

console.log("factorialFor :" + factorialFor(5));
console.log("factorialRecursive :" + factorialRecursive(6));