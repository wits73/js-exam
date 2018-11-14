function checkBrackets(input){
    lines = input.split('\n');
    var chars;
    for (var i=1; i < lines.length; i++){
        var sl = []
        chars = lines[i].split('');
        res = true;
        for(var j=0; j< chars.length; j++){
            switch(chars[j]){
                case ']':
                    if (sl.pop() != '[') res = false;
                    break;
                case '}':
                    if (sl.pop() != '{') res = false;
                    break;
                case ')':
                    if (sl.pop() != '(') res = false;
                    break;
                default:
                    sl.push(chars[j]);
                    break;
                    
            }
            if (!res) break;
        }
        console.log(res&!sl.length?'YES':'NO');
    }
}
console.log(checkBrackets(3)); // true
console.log(checkBrackets("{[()]}")); // false
console.log(checkBrackets('{{[[(())]]}}')); // false

