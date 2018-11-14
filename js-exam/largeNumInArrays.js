const arrValue = [
    [4,5,1,3],
    [13,27,18,26,69],
    [32,35,37,39],
    [1000,1001,857,1,-1005,2006]
];

function largestNumInArr(arr){
    let maxValue = [];
    for(let i = 0; i < arr.length; i++){
        let eachMax = arr[i][0];
        for(let k = 0; k < arr[i].length; k++){
            if(eachMax < arr[i][k]){
                eachMax = arr[i][k];
            }    
        }
        maxValue.push(eachMax);

    }
    return maxValue;
}

function largestNumInArrBySort(arr){
    let maxValue = [];
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i].sort(function(a,b){return b > a });
        //console.log(temp);
        maxValue.push(temp[0]);
    }
    return maxValue;
}


console.log(largestNumInArr(arrValue));
console.log(largestNumInArrBySort(arrValue));
