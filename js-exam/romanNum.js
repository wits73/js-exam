function convertToRoman(num){
    var romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 4000,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = "";

    for (let key in romanToNum) {
        //console.log(key);
        while (num >= romanToNum[key]){
            roman += key;
            num -= romanToNum[key];
        }
    }
    return roman;
}

console.log(convertToRoman(8));
