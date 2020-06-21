var item = ["cake", "apple pie", "cookie", "chips", "patties"];

var search =  prompt("Welcome to ABC Bakari. What do you want to order Sir/Madam? " + " ");

if (item.indexOf(search) !== -1){
    alert(" Yes " + search + " Item is Avalible ")
}
else{
    alert("WE Are Sorry " + search + " Item is Not Avalible ")
}


