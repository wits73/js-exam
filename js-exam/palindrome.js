function palindromeFunc(str){
    let reg = /[\W]/g;
    let smallStr = str.toLowerCase().replace(reg, "");

    console.log(smallStr);
    
    let reversed = smallStr.split("").reverse().join("");
    return reversed === smallStr;
}

console.log(palindromeFunc("racecar*.="));
console.log(palindromeFunc("eye"));
console.log(palindromeFunc("2aa3"));