function truncateStr(str, num) {
    if (num >= str.length ) return str;
    //if (num <= 3) return str.slice(0,num) + "...";
    return str.slice(0, num - 3) + "...";
}

console.log(truncateStr("Hello, how can I help you", 5));
console.log(truncateStr("Hello", 5));


