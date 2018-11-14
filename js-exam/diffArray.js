function diffArray(arr1, arr2) {
    result = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1)
            result.push(arr1[i]);
    }

    for(let j = 0; j < arr2.length; j++){
        if(arr1.indexOf(arr2[j]) === -1)
            result.push(arr2[j]);
    }
    return result;
}

function diffArrayByFilter(arr1, arr2) {
    let combine = arr1.concat(arr2);

    return combine.filter(function (num){
        if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1 ){
            return num;
        }
    });
}

let setA = [1,2,3,5];
let setB = [1,2,3,4,5];

console.log( diffArray(setA, setB));
console.log( diffArrayByFilter(setA, setB));

let nums = [1,2,3,4,5];
console.log(nums.filter((num)=>{
    return num > 4;
}))