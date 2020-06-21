function count(){
    var str = +prompt("Enter The Starting Number");
    var end = +prompt("Enter the End Number");
    
    for(var i=str; i< (end+1); i++){
        document.write( i + "<br />")
    }

}

count();



