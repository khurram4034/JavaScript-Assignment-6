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

