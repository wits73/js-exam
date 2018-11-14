function confirmEnding(str, target) {
    if (str.endsWith(target))
        return true;
    return false;

    //return str.endsWith(target)
}

function confirmEndingBySubstr(str, target) {
    return str.substr(-target.length) === target;
}

function confirmEndingBySlice(str, target) {
    return str.slice(-target.length) === target;
}

console.log(confirmEnding("Boston", "n"));
console.log(confirmEnding("Hello, my name is Abe.", "e."));

console.log(confirmEndingBySubstr("Hello, my name is Abe.", "e."));
console.log(confirmEndingBySlice("Hello, my name is Abe.", "Abe."));