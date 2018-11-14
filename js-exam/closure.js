let arr = []
for(let i = 0; i < 5; i++){
    arr[i] = function() {
        return i;
    }
}

for(let index in arr){
    console.log(arr[index]());
}


function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
console.log(ghost.get_title());
console.log(matrix.get_title());
 
ghost.set_title('공각기동대');
 
console.log(ghost.get_title());
console.log(matrix.get_title());
/*
function outter(){
    var title = 'coding everybody';  
    return function(){        
        console.log(title);
    }
}
inner = outter();
inner();
inner();


function outter(){
    let title = 'coding everybody'; 
    function inner(){  
        console.log(title);
    }
    inner();
}


*/