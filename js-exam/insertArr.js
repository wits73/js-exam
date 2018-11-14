function getIndexToIns(arr, num){
    
    let temp = arr.sort(function(a,b){return a - b});
    if (temp[temp.length - 1] < num)
        return temp.length;
    if (temp[0] > num)
        return 0;

    for (let i = 0 ; i < temp.length ; i++){
        if(temp[i] >= num )
            return i;
    }
    

}

console.log(getIndexToIns([40,60,10], 100));