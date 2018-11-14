function findLongestString(str){
    let reg = /[\W]/g;
    //let cleaned = str.replace(reg,"");

    let words = str.split(" ")
    let longest = "";
    for(let word of words){
        let temp = word.replace(reg,"");
        if (temp.length > longest.length) longest = temp;
    }
    return longest;
}

function findLongestStrSort(str){
    return str.split(" ").sort(function(a,b){return b.length - a.length})[0];
}

console.log(findLongestString("This test is very good practice ever eventually!"));
console.log(findLongestStrSort("This test is very good practice ever eventually!"));