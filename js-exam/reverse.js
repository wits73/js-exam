// Reverse a String With Built-In Functions
function reverseStr(str) {
    // Step 1. Use the split() method to return a new array
    let splitStringArr = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitStringArr.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join(","); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
    //Totally same  
    //return str.split("").reverse().join("");
}

function reverseWords(str){
    let splitStringArr = str.split(" ");
    let text = '';
    splitStringArr.forEach((entry) => {
        let temp = entry.split("").reverse().join("");
        text += temp;
    });

    return text;
}

// Reverse a String With a Decrementing For Loop
function reverseStrII(str) {
    
    
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Recursion way
function reverseStrIII(str) {
    //"hello".substr(1); // "ello"
    //"hello".charAt(0); // "h"
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else{
        //console.log();
        return reverseStrIII(str.substr(1)) + str.charAt(0);
    }
  /* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  Each call: str === "?"        	                reverseStrIII(str.subst(1))     + str.charAt(0)
  1st call – reverseStrIII("Hello")   will return   reverseStrIII("ello")           + "h"
  2nd call – reverseStrIII("ello")    will return   reverseStrIII("llo")            + "e"
  3rd call – reverseStrIII("llo")     will return   reverseStrIII("lo")             + "l"
  4th call – reverseStrIII("lo")      will return   reverseStrIII("o")              + "l"
  5th call – reverseStrIII("o")       will return   reverseStrIII("")               + "o"
  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately
  5th call will return reverseStrIII("") + "o" = "o"
  4th call will return reverseStrIII("o") + "l" = "o" + "l"
  3rd call will return reverseStrIII("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserStrIII("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserStrIII("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  }


console.log(reverseStr("hello"));
console.log(reverseStrII('hello'));
console.log(reverseStrIII('hello'));

console.log(reverseWords('Band of Brothers'));