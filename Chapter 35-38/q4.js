function calcu(){
  var n1 = +prompt("Enter First Number");
  var op = prompt("Enter Operator");
  var n2 =  +prompt("Enter Second Number");
  if(op === "+"){
    document.write(n1+n2)
  }
  else if(op === "-"){
    document.write(n1-n2)
  }
  else if(op === "*"){
    document.write(n1*n2)
  }
  else if(op === "/"){
    document.write(n1/n2)
  }
  else{
    document.write("Please Ensurt The Correct Operator")
  }

     
  }
  
  calcu()
