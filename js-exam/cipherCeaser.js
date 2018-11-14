function rot13(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        
        if(asciiNum >= 65 && asciiNum <= 77) {
            result += String.fromCharCode(asciiNum + 13);
        } else if (asciiNum >= 78 && asciiNum <= 90) {
            result += String.fromCharCode(asciiNum - 13);
        } else {
            result += str[i];
        }
    }
    return result;
}

function rot3(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        
        if(asciiNum >= 65 && asciiNum <= 87) {
            result += String.fromCharCode(asciiNum + 3);
        } else if (asciiNum >= 88 && asciiNum <= 90) {
            let temp = 65;
            switch (asciiNum) {
                case 88:
                result += String.fromCharCode(temp);
                break;
                case 89:
                result += String.fromCharCode(temp+1);
                break;
                case 90:
                result += String.fromCharCode(temp+2);
                break;
            }
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(rot13("HI HOW ARE YOU"));
console.log(rot3("W XYYZ!"));
