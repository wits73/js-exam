function mutationStr(arr) {
    let firstStr = arr[0].toLowerCase();
    let secondStr = arr[1].toLowerCase();
    /*
    for (let i = 0; i < secondStr.length; i++){
        if (firstStr.indexOf(secondStr[i]) === -1) return false;
    }
    */

    for (let letter of secondStr) {
        if (!firstStr.includes(letter)) return false;
    }

    return true;
}

console.log(mutationStr(["hello","hey"]));
console.log(mutationStr(["Alien","line"]));