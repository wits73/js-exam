function solution(arr) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 1;
    let temp = arr.sort(function(a,b){return b < a});
    //console.log(temp);
    
    if ( temp[temp.length-1] < 0)
        return result; 
    
    result = temp[0] + 1;

    for(let i = 1; i < temp.length; i++){
        if(temp[i] === result)
            result = temp[i]+1;
    }
    return result;  
}
const arrValue = [4,5,1,3,'A'];
console.log(solution(arrValue));


function solutionB(N) {
    let result = "";
    let tempStr = N.toString();
    //console.log(tempStr);
    let tempArr = tempStr.split("");

    tempArr[0] = parseInt(tempStr[0]) + 1;
    tempArr[tempArr.length - 1] = 0;
    
    result = tempArr.join("");
    console.log(result);
    return parseInt(result);
}

console.log(solutionB(15));


function find_min(A) {

    let ans = A[0]
    for (let i = 1; i < A.length; i++) {
        if (ans > A[i]) {
            ans = A[i];
        }
    }
    return ans;
}

console.log(find_min(arrlue));

