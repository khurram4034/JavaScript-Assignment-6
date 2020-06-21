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