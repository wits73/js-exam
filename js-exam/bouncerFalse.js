function bouncer(arr){
    let result = [];
    for(let elem of arr){
        if (elem) result.push(elem);
    }
    return result;
}

function bouncerByFilter(arr){
    
    return arr.filter(function(elem){
        return elem;
    });;
}

let test = [7, "ate", "", false, 9, undefined, [], {} ];
console.log(bouncer(test));
console.log(bouncerByFilter(test));

/*
let num = [1,2,3,4,5,6];

let a = num.filter(function(item){
    return item < 4;
});
console.log(a);

"" => false
{} => true
[null] => true
if([null]){
    console.log("hello")
}
*/