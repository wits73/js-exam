function destroyer(arr){
    if(arguments.length < 2) return false;

    //objArr = arguments[0];
    // objects to array
    let args = Array.from(arguments);
    args.splice(0,1);
    
    objTarget = []
    for(let num of arr){
        if (args.indexOf(num) === -1){
            objTarget.push(num);
        }
    }
    return objTarget;
}

function destroyerByFilter(arr){
    if(arguments.length < 2) return false;

    let args = Array.from(arguments);
    args.splice(0,1);
    
    return arr.filter(function(num){
        return args.indexOf(num) === -1;
    });
}

function destroyerByFilterInclude(arr){
    if(arguments.length < 2) return false;

    let args = Array.from(arguments);
    args.splice(0,1);
    
    return arr.filter(function(num){
        return !args.includes(num);
    });
}


console.log(destroyer([1,2,3,1,2,3], 2,3));
console.log(destroyerByFilter([1,2,3,1,2,3], 2));
console.log(destroyerByFilterInclude([1,2,3,1,2,3], 2));