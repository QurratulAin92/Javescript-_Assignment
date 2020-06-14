var a = +prompt("Enter the value of a!")


document.write("RESULTS: " +"<br>")
document.write("The value of a is : "+ a + "<br>"+ "<br>")

document.write("The value of ++a is : "+(++a)+"<br>")
document.write("Now the value of a is :"+(a)+"<br>"+"<br>")

document.write("The value of a++ is : "+(a++)+"<br>")
document.write("Now the value of a is :"+(a)+"<br>"+"<br>")

document.write("The value of --a is : "+(--a)+"<br>")
document.write("Now the value of a is :"+(a)+"<br>"+"<br>")

document.write("The value of a-- is : "+(a--)+"<br>")
document.write("Now the value of a is :"+(a)+"<br>"+"<br>")

//Question 2

var a =  2
var b =  1

document.write("Question 2 Execution of script" +"<br>")
document.write("a is "+ a +"<br>")
document.write("b is "+ b +"<br>")
document.write("result is "+((--a)-(--b)+(++b)+(b--)) +"<br>")


//Explanation of output at every stage

document.write("Explanation of output at every stage.."+"<br>")
document.write("Stage 1 : --a is "+ 1+"<br>")
document.write("Stage 2 : --a - --b is "+ (1-0)+"<br>")
document.write("Stage 3 : --a - --b + ++b is "+(1-0+1) +"<br>")
document.write("Stage 4 : --a - --b + ++b is "+(1-0+1+1) +"<br>"+"<br>"+"<br>")

// Question 3
var name = prompt("Please Enter your Name here")
alert("Hi! " + name)

// Question 5
var number = +prompt("Please enter any number you want")
for(i=1 ; i <= 10 ; i++)
document.write(number + " x " + i +"  =  " + number*i + "<br>")


 //Question 6 MARKSHEET

 var sub1 = +prompt("Enter your numbers in ENGLISH..")
 var sub2 = +prompt("Enter your numbers in URDU..")
 var sub3 = +prompt("Enter your numbers in MATH..")

 var  totalMarks = 300

 var calculation = (sub1+sub2+sub3)/totalMarks*100
 

 document.write("MARKS SHEET" + "<br>" + "<br>")

 document.write("Total Marks : "+totalMarks + "<br>")
 document.write("Marks Obtained : " +(sub1+sub2+sub3)+ "<br>")
 document.write("Percentage : "+calculation + "<br>")
 
    





