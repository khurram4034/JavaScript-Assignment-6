
var array = [23, 53, 78, 91, 12];

document.write("Array Item : " + array + "<br />"+ "<br />")

var min = Math.min.apply(Math, array)
console.log(min)

document.write("The Smallest Number is :" + " " + min);



