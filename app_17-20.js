


//Question3

document.write("numeric counting" +"<br>")
for(var i=0;10>=i;i++){
    document.write(i + "<br>")
}
//Question4
document.write("Table"+ "<br>")
var tableNum = prompt("Enter a number to show its multiplication table")
var lengthOfTable = prompt("Enter length of table")

for(var i=1;i<=lengthOfTable;i++){
    document.write(tableNum + " * " + i + " " + "=" + i*tableNum + "<br>")
 
 }

//Question5
document.write("printing array items" + "<br>")
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for(var a=0; a<fruits.length;a++){
    document.write(fruits[a] + "<br>")
}
 
//Question6 (a)
document.write("counting"+ "<br>")
for(var i=0;i<16;i++){
    document.write(i + "<br>")
}

//Question6 (b)
document.write("reversing counting"+ "<br>")

for(var i=10;i>=0;i--){
    document.write(i + "<br>")
    
}

//Question6 (c)
document.write("even"+ "<br>")
for(var i=0;i<=20;i++){
    document.write(i*2 + "<br>")
}
//Question6 (d)
document.write("odd"+ "<br>")
for(var a = 1;a<=20;a++){
    document.write(a+2 +"<br>")
}

//Question6 (e)
document.write("series"+ "<br>")
for(var i=1;i<=20;i++){
    document.write(i*2+ "k"+"<br>")
}

//Question7

var search = prompt("WELCOME to ABC bakery What do you want to order?")

var items = ["cake", "apple pie", "cookie", "chips", "patties"]

for(var i=0;i<items.length;i++){
    if(search===items[i]){
        alert("Your item is available in index number "+i)
        break;
        
    }else if(search!=items[i]){
        alert("We are Sorry " + search + " is not available in our bakery ")
        break;
    }
}

//Question8
document.write("largest number"+ "<br>")
var arr1 = [91,53,78,24,12]
 for(var i=0;i<arr1.length;i++){
   if(arr1[i]>arr1.length){
       alert("The largest number is "+arr1[i] )
       break;
   }
 }

//Question9
document.write("smallest number"+ "<br>")
var arr2 = [12,53,78,24,91]
for(var i=0;i<arr2.length;i++){
  if(arr2[i]>arr2.length){
      alert("The smallest number is "+arr2[i])
      break;
  }
}

//Question10
document.write("multiple of 5"+ "<br>")
for(var i = 1;i<=20;i++){
    document.write(i*5+",")
    
}