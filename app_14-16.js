//Question1

var arr = [];

//Question2

var arr1 = [];

//Question3

var stringArray = ["ahmed", "ali", "uzair", "huzaifa", "usama", "bilal"]

//Question4

var numArray = [2,4,6,8,0,1,3,5,7,9]

//Question5

var booleanArray = [true,false]

//Question6

var mixedArray = [1,"saad", 2 , "zain","abdullah" , 4 , true , "hamza" , false]

//Question7

var qualification = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
document.write(qualification[0]+"<br>")
document.write(qualification[1]+"<br>")
document.write(qualification[2]+"<br>")
document.write(qualification[3]+"<br>")
document.write(qualification[4]+"<br>")
document.write(qualification[5]+"<br>")
document.write(qualification[6]+"<br>")
document.write(qualification[7]+"<br>")


// document.write("Qualification:")

//Question8

var student = ["Mihael","John","Tony"]
var scores = [320 , 230 , 480]

document.write("Score of " + student[0] + " is " + scores[0] + " Percentage: " + scores[0]/500*100 + "% " +"<br>")

document.write("Score of " + student[1] + " is " + scores[1] + " Percentage: " + scores[1]/500*100 + "% " +"<br>")

document.write("Score of " + student[2] + " is " + scores[2] + " Percentage: " + scores[2]/500*100 + "% ")

//Question9 

var colors = ["yellow", "blue", "green" , "red" , "black" , "white", "pink" , "orange"]
alert(colors)

//Question9 (a)
var input = prompt("what color do you want to add in the beginning?")

colors.unshift(input);

alert(colors)

//Question9 (b)

var colors1 = ["yellow", "blue", "green" , "red" , "black" , "white", "pink" , "orange"]

var input = prompt("what color do you want to add in the end of the list?")

colors1.push(input);

alert(colors1)

//Question9 (c)

var colors2 = ["yellow", "blue", "green" , "red" , "black" , "white", "pink" , "orange"]

colors2.unshift("skyblue", "lightgreen")

alert(colors2)

//Question9 (d)

var colors3 = ["yellow", "blue", "green" , "red" , "black" , "white", "pink" , "orange"]

colors3.shift()

alert(colors3)

//Question9 (e)

var colors4 = ["yellow", "blue", "green" , "red" , "black" , "white", "pink" , "orange"]

colors4.pop()

alert(colors4)

//Question9 (f)

var colors5 = ["yellow", "blue", "green" , "red" , "black" , "white", "pink" , "orange"]

var input1 = +prompt("Please enter the index number at which you desire to enter the color")
var input2 = prompt("Please enter the color name")

colors5.splice(input1,0,input2)

alert(colors5)

//Question9 (g)

var colors6 = ["yellow", "blue", "green" , "red" , "black" , "white", "pink" , "orange"]

var input3 = +prompt("Please enter the index number at which you want to delete colors")
var input4 = +prompt("How many colors you want to delete?")

colors6.splice(input3,input4)

alert(colors6)

//Question11

var citiesName = ["Karachi" , "Lahore" , "Peshawar" , "Quetta" , "Islamabad"]

var selactedCities = citiesName.slice(2,4)

alert(selactedCities)

//Question12

var arr2 = ["This" , "is" , "my" , "cat"]

var singleString = arr2[0]+" "+arr2[1]+" "+arr2[2]+" "+arr2[3];

alert(singleString)


