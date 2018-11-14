function reverseStr(str){
    let result = "";
    return str.split("").reverse().join("");
    /*
    let receiveStr = str.split("");
    receiveStr.reverse();
    result = receiveStr.join("");
    return result;
    */
}

function reverseStrFor(str){
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

console.log("reverseStr :" + reverseStr("Hello"));
console.log("reverseStrFor :" + reverseStr("123456789"));