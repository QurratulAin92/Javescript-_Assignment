//Question 2
var val1= +prompt("enter first number")
var val2= +prompt("enter second number")

if(val1>val2){
    alert("Larger number is " + val1)
}else if(val2>val1){
    alert("Larger number is " + val2)
}else if(val1===val2){
    alert("Both numbers are equal " + val1 + "=" + val2)
}

//Question 3
var num = +prompt("Enter number")
if(num > 0){
    alert("This number is positive")
}else if(num < 0){
    alert("This number is negative")
}else if(num === 0){
    alert("This number is Zero")
}

//Question 4

var alphabet;
alphabet = prompt("Please enter one alphabet from a to z to check whether it is vowel or not")


if(alphabet === "a" || alphabet === "e" || alphabet == "i" || alphabet == "o" || alphabet == "u" || alphabet === "A" || alphabet === "E" || alphabet == "I" || alphabet == "O" || alphabet == "U"){
   alert("True")
}else(alert("False"))

//Question 5

var correctPassword = "13579"
var inputPassword = prompt("Enter password");

if(inputPassword === ""){
    alert("Please enter your password")
}else if(inputPassword === correctPassword){
    alert("Correct! The password you entered matches the original password")
}else(alert("Incorrect password"));

//Question 6
var greeting; 
var hour = 13;
if (hour < 18) { 
     greeting = "Good day"
 } else (greeting = "Good evening");
 
//Question  7
var time = +prompt("Please enter time  in 24 hours clock format like: 1900 for 7pm")

if(time >= 0000 && time < 1200){
    alert("Good Morning!")
}else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!")
}else if(time >= 1700 && time < 2100){
    alert("Good Evening!")
}else if(time >= 2100 && time <= 2359){
    alert("Good Night!")
}else("Please enter the correct time")