function titleCase(str){
    let words = str.toLowerCase().split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
    }
    return words.join(" ");
}

function titleCaseMap(str){
    return str.toLowerCase().split(" ").map(function(elem) {
        return elem[0].toUpperCase() + elem.slice(1);
    }).join(" ");
}

console.log(titleCase("I'm a little tea pot!"));
console.log(titleCaseMap("I'm a little tea pot!"));