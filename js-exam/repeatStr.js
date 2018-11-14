function repeatStr(str, num) {
    let result = "";
    if (num < 0) return result
    
    return str.repeat(num); 
}

function repeatStrFor(str, num) {
    let result = "";
    if (num < 0) return result

    for(let i = 0; i < num; i++){
        result += str;
    }
    return result; 
}

function repeatStrRecul(str, num) {
    let result = "";
    if (num < 0) return result
    if (num === 1) return str

    return str + repeatStrRecul(str, num - 1); 
}

console.log(repeatStr("Hello", 3));
console.log(repeatStrFor("Hello", 4));
console.log(repeatStrRecul("Hello", 3));