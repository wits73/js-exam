// slice vs splice
// slice leaves original array vs splice mutates original
function chunkArrInGroups(arr, size) { 
    let groups = [];
    
    if (arr.length < size) return groups = arr;
    
    while (arr.length > 0) {
        groups.push(arr.slice(0, size));
        arr = arr.slice(size);
    } 
    return groups
}

function chunkArrInGroupsBySplice(arr, size) { 
    let groups = [];
    
    if (arr.length < size) return groups = arr;
    
    while (arr.length > 0) {
        groups.push(arr.splice(0, size));
    } 
    return groups
}

function slasher(arr, size) {
    arr.splice(0,size);
    return arr;
}

const arrTemp = [1,2,3,4,5,6,7,8,9,0];

console.log(chunkArrInGroups(arrTemp, 2));
//console.log(chunkArrInGroupsBySplice(arrTemp, 3));
console.log(slasher(arrTemp, 3));
