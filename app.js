// Chapter # 21-25

// Task 1:

var first = prompt("Enter Your First Name");
var second =  prompt("Enter the Last Name");

var fullName = first + second

document.write(fullName)

// Task 2:

var mob = prompt("Entery Mobile Modle");

document.write("My Favrite Phone is : " + mob + " <br /> " + "Length of String is :  "  + mob.length)


// Task 3:

var str = "Pakistan";

n = str.indexOf("n")

document.write("String : "+ str + "<br />" + "Index of 'n' : " + n)

// Task 4:

var str = "Hello World";
// var str1 = "World"
n = str.lastIndexOf("l")

document.write("String : "+ str + "<br />" + "Index of 'l' : " + n)

// Task 5:

var str = "Pakistan";
n = str.charAt(3)

document.write("String : "+ str + "<br />" + "Character at Index '3' : " + n)

// Task 6:

var first = prompt("Enter Your First Name");
var second =  prompt("Enter the Last Name");

var fullName = first + second

document.write(fullName)

// Task 7:

var chr = "Hyderabad";

newText = chr.replace("Hyderabad","Islamabad");

document.write("City : "+ chr + "<br />"+ "After Replacement : " + newText);
// Task 8:

var message = "Ali and Sami are best friends. They play cricket and football together.";

newText = message.replace(/and/g, "&");

document.write("Given Message is : "+ message + "<br />"+ "<br />"+ "After Replacement : " + newText);

// Task 9:

var integerString = "472"
var num = Number(integerString);

document.write("Value: "+ integerString + "<br />")
document.write("Type : "+ "String")


document.write("<br />")


var numberAsNumber = 472;
var numberAsString = numberAsNumber.toString();

document.write("Value: "+ numberAsNumber + "<br />")
document.write("Type : "+ "number")

// Task 10:

var ch = prompt("Enter Any Character ");

var change = ch.toUpperCase();

document.write("User Input : " + ch + " <br /> " + "Upper Case : " + change)

// Task 11:

var ch = prompt("Enter Any Character ");

for(var i = 0; i < ch.length; i++) {
    ch[i] = ch[i].charAt(0).toUpperCase() + ch[i].slice(1); 
  }

document.write("User Input : " + ch + " <br /> " + "Upper Case : " + ch.join)


// Task 12:


// Task 13:

var floatingNumString = 35.36;
var num = floatingNumString.toString();

document.write("Number : " + floatingNumString + " <br /> " + "Result : " + num)

// Task 14:

var item = ["cake", "apple pie", "cookie", "chips", "patties"];

var search =  prompt("Welcome to ABC Bakari. What do you want to order Sir/Madam? " + " ");

if (item.indexOf(search) !== -1){
    alert(" Yes " + search + " Item is Avalible ")
}
else{
    alert("WE Are Sorry " + search + " Item is Not Avalible ")
}

// Task 15:

var university = "University of Karachi";

var ar = university.split('');

document.write(ar)

// Task 16:

var university = "University of Karachi";

var ar = university.split('');

document.write(ar)


// Task 17:

var ch = prompt("Enter Any Character")

var str = ch.charAt(ch.length-1)

document.write("User Input : " + ch + "<br />" + "Last Character of Input : "  + str)

// Task 18:

var floatingNumString = 35.36;
var num = floatingNumString.toString();

document.write("Number : " + floatingNumString + " <br /> " + "Result : " + num)

// Chapter # 26-30

// Task 1:

var num = +prompt("Enter Any Positive Number");

document.write("Number: " + num + "<br />");

var ro= Math.round(num);
document.write("Round Of Value is : " +  ro + "<br />");

var fo= Math.floor(num);
document.write("Floor Value is : " +  fo + "<br />");

var ce= Math.ceil(num);
document.write("Floor Value is : " +  ce + "<br />");


// Task 2:

var num = +prompt("Enter Any Negative Number");

document.write("Number: " + num + "<br />");

var ro= Math.round(num);
document.write("Round Of Value is : " +  ro + "<br />");

var fo= Math.floor(num);
document.write("Floor Value is : " +  fo + "<br />");

var ce= Math.ceil(num);
document.write("Floor Value is : " +  ce + "<br />");

// Task 3:

var num = +prompt("Enter Any Number");

var ab= Math.abs(num);
document.write("The Absolute Value of  : " +  num + " is " + ab);


// Task 4:

var ab= Math.floor(Math.random()*6) +1;
document.write("Randon Dic Value  : " + " is " + ab + "<br />" + "<br />");

var ab= Math.floor(Math.random()*6) +1;
document.write("Randon Dic Value  : " + " is " + ab);

// Task 5:

var num = Math.random()< 0.5;
if (num < 0.5){
    document.write("2" + "<br />");
    document.write("Randon Coin Value is : " + "Heads");
    }else{
        document.write("1" + "<br />");
        document.write("Randon Coin Value is : " + "Tails");
    }


// Task 6:

var n = Math.floor(Math.random() * 100) + 1;

document.write("Randome Number Between 1 and 100 : " + n)


// Task 7:

var weight = prompt("Enter Your Weight");

document.write("The Weight of user is " + weight + " Kilograms ")


// Task 8:

var student = ["Micheal", "Jhon", "Tony"];
var scroe = [320, 230, 480];
var total = 500;

var per1 = (scroe[0]*100)/total;
var per2 = (scroe[1]*100)/total;
var per3 = (scroe[2]*100)/total;

for(i=0; i < student.length; i = (student+1)){
       document.write("Score of " + " " + student[0] + " " + " is " + scroe[0] + "." + " " + "Percentage :" + per1 + " % " + "<br>")
       document.write("Score of " + " " + student[1] + " " + " is " + scroe[1] + "." + " " + "Percentage :" + per2 + " % " + "<br>")
       document.write("Score of " + " " + student[2] + " " + " is " + scroe[2] + "." + " " + "Percentage :" + per3 + " % " + "<br>")
}

// Chapter # 31-34

// Task 1:

var rightNow = new Date();

document.write(rightNow)

// Task 2:

var date = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[date.getMonth()];

document.write("Current Month : " + n)

// Task 3:

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];

document.write("Today is : " + n)


// Task 4:

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];

if(n === "Sat" || n === "Sun"){
  document.write("It's Fun Day : ")
}
else{
  document.write("It's Working Day : ")
}

// Task 5:

var d = new Date();
var date = d.getDate();

if(date <15){
    document.write("First fifteen day of the month")
}
else{
    document.write("Last days of the month")
}


// Task 6:

// Task 7:

var item = ["cake", "apple pie", "cookie", "chips", "patties"];

var search =  prompt("Welcome to ABC Bakari. What do you want to order Sir/Madam? " + " ");

if (item.indexOf(search) !== -1){
    alert(" Yes " + search + " Item is Avalible ")
}
else{
    alert("WE Are Sorry " + search + " Item is Not Avalible ")
}


// Task 8:


var array = [23, 53, 78, 91, 12];
var largest= 0;

document.write("Array Item : " + array + "<br />"+ "<br />")

for (i=0; i<=largest;i++){
    if (array[i]> largest) {
        var largest=array[i];
    }
}

document.write("The Largest Number is :" + " " + largest);


// Task 9:


var array = [23, 53, 78, 91, 12];

document.write("Array Item : " + array + "<br />"+ "<br />")

var min = Math.min.apply(Math, array)
console.log(min)

document.write("The Smallest Number is :" + " " + min);

// Task 10:

for(var i=1; i<= 20; i++){
    document.write(i*5 + " , ")
  }


// Task 11:


// Task 12:

// Task 13:

// Task 14:

var name = prompt("Enter the Consumer Name");
var unt = +prompt("Enter the Units");
var charge = 16;
var la = 350;

var date = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[date.getMonth()];

document.write("Consumer Name : " + name + "<br />")
document.write("Current Month : " + n + "<br />")
document.write("Number of Units  : " + unt + "<br />")
document.write("Charge per Units  : " + charge + "<br />"+ "<br />")
var total = unt*charge
document.write("Net Amount Payable (within Due Date : ) " + total + "<br />")
document.write("Late Payment Surcharge  : " + la + "<br />")
document.write("Net Amount Payable (within Due Date : ) " + (total+la) + "<br />")


// Chapter # 35-38

// Task 1:

function time(){

    var rightNow = new Date();
    
    document.write(rightNow)
    
    }
    time();


// Task 2:

function name(){
    var first = prompt("Enter Your First Name");
    var second =  prompt("Enter the Last Name");
    
    var fullName = first + second
    
    document.write(fullName)
      
    }
    
    name()

// Task 3:

function add(){
    var n1 = +prompt("Enter First Number");
    var n2 =  +prompt("Enter Second Number");
    
    var plus = (n1 + n2)
    
    document.write(plus)
      
    }
    
    add()

// Task 4:

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

// Task 5:

function sq(){
    var num = +prompt("Enter anu number");
    var sum = (num * num);
    
    
    document.write(sum);

}
sq();

// Task 6:

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


// Task 7:

function count(){
    var str = +prompt("Enter The Starting Number");
    var end = +prompt("Enter the End Number");
    
    for(var i=str; i< (end+1); i++){
        document.write( i + "<br />")
    }

}

count();

// Task 8:

var n1 = +prompt("Enter the Base Value");

var n2 = +prompt("Enterh the Perpandicular value");


function outcalc(){
var base = n1*n1;
var perp = n2*n2;
var hy = (base+perp)
var Hypotinuous =hy*hy;    
var sq = Math.sqrt(Hypotinuous);
document.write("Hypothinous " + " = "   + sq)
}
outcalc();

// Task 9:

var array = [23, 53, 78, 91, 12];

document.write("Array Item : " + array + "<br />"+ "<br />")

var min = Math.min.apply(Math, array)
console.log(min)

document.write("The Smallest Number is :" + " " + min);


// Task 10:


// Task 11:

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));

// Task 12:

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("EXAMPLE STRING : " + 'Web Development Tutorial' + '<br />'+ '<br />');
document.write("EXPECTED OUTPUT : ");
document.write(find_longest_word('Web Development Tutorial'));

// Task 13:

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("Sample arguments " + ' "JSResourceS.com": ')
document.write(char_count('JSResourceS.com', 'o'));

// Task 14:

