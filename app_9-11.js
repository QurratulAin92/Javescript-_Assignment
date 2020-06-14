//Question 1

var city = prompt("enter your city name?")
if (city=="karachi"){
    alert("Welcome to the city of light")
}

//Question 2

var gender = prompt("Write your gender please!")

if(gender == "male"){
    alert("Good Morning Sir")
}else if(gender == "female"){
    alert("Good Morning Ma'am")
}
//Question 3 

var  color= prompt("Color of road traffic signal!")
if(color == "red"){
    alert("Must Stop")
}else if(color == "yellow"){
    alert("Ready To Move")
}else if(color == "green"){
    alert("Move Now")
}

//Question 4

var  fuel= +prompt("Enter remaining fuel in litres!")
if(fuel<0.25){
    alert("Please refill the fuel in your car")
}

//Question 5 (a)
var a = 4; 
if (++a === 5){
     alert("given condition for variable a is true"); } 
     //OUTPUT IS TRUE

 //Question 5 (b)
  var b = 82; 
 if (b++ === 83){
      alert("given condition for variable b is true"); }
      //OUTPUT NOT TRUE

 //Question 5(c)
 var c = 12;
      if (c++ === 13){
           alert("condition 1 is true"); }      
      //OUTPUT NOT TRUE

      if (c === 13){
           alert("condition 2 is true"); }
           //OUTPUT IS  TRUE
      if (++c < 14){
           alert("condition 3 is true"); }
            //OUTPUT IS NOT TRUE
      if(c === 14){ 
          alert("condition 4 is true"); }   
            //OUTPUT IS TRUE   

//Question 5(d)
var materialCost = 20000;
 var laborCost = 2000;
  var totalCost = materialCost + laborCost;
   if (totalCost === laborCost + materialCost){
     alert("The cost equals"); } 

//Question 5(e)

if (true){
     alert("True"); }
if (false){
    alert("False"); }
//output true            
 
//Question 5(f)

if("car" < "cat"){ 
    alert("car is smaller than cat"); } 
 //output = car is smaller than cat
 
 //Question 6 MARKSHEET

 var sub1 = +prompt("Enter your numbers in ENGLISH..")
 var sub2 = +prompt("Enter your numbers in URDU..")
 var sub3 = +prompt("Enter your numbers in MATH..")

 var  totalMarks = +prompt("Enter the total marks..")

 var calculation = (sub1+sub2+sub3)/totalMarks*100
 

 document.write("MARKS SHEET" + "<br>" + "<br>")

 document.write("Total Marks : "+totalMarks + "<br>")
 document.write("Marks Obtained : " +(sub1+sub2+sub3)+ "<br>")
 document.write("Percentage : "+calculation + "<br>")
 
if(calculation>=80){
    document.write("Grade : " + "A+"+"<br>")
    document.write("Remarks : " + "EXCELLENT..."+"<br>")
}else if(calculation>=70){
    document.write("Grade : " + "A"+"<br>")
    document.write("Remarks : " + "GOOD.."+"<br>")
}else if(calculation>=60){
    document.write("Grade : " + "B"+"<br>")
    document.write("Remarks : " + "You Need To Improve.."+"<br>")
}else if(calculation<60){
    document.write("Grade : " + "Fail"+"<br>")
    document.write("Remarks : " + "Sorry.."+"<br>")

}

//Question 7(guess game)

var secretNum = 6
var guessNum = +prompt("Guess one number from 1 to 10..")

//(a)
if(secretNum==guessNum){
    alert("Bingo! Correct Number")
//(b)    
}else if(++guessNum==secretNum){
    alert("Close enough to the correct answer..!")

}else("You have chosed the wrong number")

//Question 8 NUMBER DIVISIBLE BY 3 OR NOT

var chooseNum = +prompt("Choose the number so we will tell you whether this number is divisible by 3 or not!")
if(chooseNum%3==0){
    alert("This number is completely divisible by 3")
}else if(chooseNum%3!=0){
    alert(("This number is not divisible by 3"))
}

//Question 9 ODD & EVEN

var enterNum = +prompt("Enter number so we will tell you whether this number is odd or even")

if(chooseNum%2==0){
    alert(enterNum +" is EVEN")
}else if(chooseNum%2!=0){
    alert((enterNum+" is ODD.."))
}

//Question 10 WEATHER

var temp = prompt("Enter the temperature!")

if(temp>40){
    alert("It is too hot outside...!!!")
}else if(temp>30){
    alert("The Weather today is Normal...!!!")
}else if(temp>20){
    alert("Today's Weather is cool...!!!")
}else if(temp>10){
    alert("OMG! Today's weather is so Cool")
}

//Question 11 CALCULATOR

var num1 = +prompt("Enter the first number...")
var num2 = +prompt("Enter the second number...")
var operator = prompt("Enter the OPERATOR +, -,*,/,%(for Percentage)")

document.write("<br>"+"<br>"+"<br>"+"CALCULATOR"+"<br>"+"<br>")

if(operator == "+"){
   document.write (num1 + " + "+ num2 +" = "+ (num1+num2))
}else if(operator == "-"){
    document.write (num1 + " - "+ num2 +" = "+ (num1-num2))
 }else if(operator == "*"){
    document.write (num1 + " * "+ num2 +" = "+ (num1*num2))
 }else if(operator == "/"){
    document.write (num1 + " / "+ num2 +" = "+ (num1/num2))
 }else if(operator == "%"){
    document.write ("Percentage " +" = "+ (num1/num2*100)+"%")
 }








