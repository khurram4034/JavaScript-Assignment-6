var n = +prompt("Enter any Number ");
function factorial(){
  
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}

answer = factorial()
document.write("The factorial of " + n + " is " + answer);



