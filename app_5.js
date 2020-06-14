// Question 1
var a = +prompt("Enter first number")
var b = +prompt("Enter second number")
var c = a + b
document.write("Sum of " + " " +  a + " and" + " " +  b + " is" + c + "<br>")

// Question 2
var d = +prompt("Enter first number")
var o = prompt("Enter Operator")
var e = +prompt("Enter second number")
if(o == "+"){
    document.write("Sum of " + " " + d  + " and" + " " +  e + " is" + " " + (d + e))

}else if(o == "-"){
    document.write("Subtraction of " + " " + d  + " and" + " " +  e + " is" + " " + (d - e))
}
else if(o == "*"){
    document.write("multiplication of " + " " + d  + " and" + " " +  e + " is" + " " + (d * e))
}
else if(o == "/"){
    document.write("division of " + " " + d  + " and" + " " +  e + " is" + " " + (d / e))
}

// Question 3
var g ;
document.write("Value after variable declaration isundefined" + "<br>")
g = 5
document.write("Initiail value is " + g + "<br>")
var h = g + (+5)
document.write("value after increment is " + h + "<br>")
var l = h - 10
document.write("Value after decrement is 0" + "<br>")
document.write("The output is 0" + "<br>")

// Question 4
var cost = 600
var buying_ticket = 5
var t = cost * buying_ticket
document.write("Total cost to buy  " + buying_ticket + "ticket " + "to a movie  is  " + cost + "<br>")

// Question 5
document.write("Table of 4" + "<br>")
j = 4
for(i = 1 ; i <= 10 ; i++){
    document.write(j + "x" + i + "=" + j * i + "<br>")
}

// Question 6
celc = 30
var far = (celc * 9 / 5 ) + 32
document.write(celc + "C" + "  is  " + far + "F" + "<br>" )
var or = (far - 32) * 5 / 9
document.write(far + " is " + or + "C" + "<br>")

// Question 7
var p_item1 = 500
var p_item2 = 1000
var q_item1 = 5
var q_item2 = 3
document.write("SHOPPING CART" + "<br>")
document.write("price of item 1 is " + p_item1 + "<br>")
document.write("Quantity of item 1 is " + q_item1 +  "<br>")
document.write("price of item 2 is " + p_item2 +  "<br>")
document.write("Quantity of item 1 is " + q_item2  + "<br>")
document.write("Shipping Charges is 500"+"<br>")
var t_cost1 = p_item1 * q_item1
var t_cost2 = p_item2 * q_item2
var n_cost = t_cost1 + t_cost2 + 500
document.write("total cost of your order is" + n_cost + "<br>" )

// Question 8
document.write("MARKSHEET" + "<br>")
var t_marks = 850
var o_marks = 743
var per = o_marks / t_marks * 100
document.write("total marks are 850" + "<br>")
document.write("obtained marks are 743" + "<br>")
document.write("percentage is " + per + "%" + "<br>")

// Question 9
var dol = 10 * 104.80
var saud = 25 * 28
var t_cur = dol + saud
document.write("Currency in PKR" + "<br>")
document.write("Total currency is" + t_cur + "PKR" + "<br>")

// Question 10
var valu = 10
var zee = ((valu + 5) * 10) / 2
alert (zee)

// Question 11
var cur_year = 2020
var brth_year = 2000
var age = cur_year - brth_year
document.write("AGE CALCULATOR" + "<br>")
document.write("Current year : " + cur_year + "<br>") 
document.write("Birth year : " + brth_year + "<br>")
document.write("Your age is : " + age + "<br>" )

// Question 12
var radius = 20
var crfm = (3.142 * 2) * radius
var area = (radius * radius) * 3.142
document.write("THE GEOMETRIZER" + "<br>")
document.write("The radius of a circle is  " + radius + "  <br> ")
document.write("The circumference is  " + crfm + "<br>")
document.write("The area is  " + area + "<br>")

// Question 13
document.write("THE LIFE TIME SUPPLY CALCULATOR" + "<br>")
var fav_snack = "Novita Wafers"
var cur_age = 20
var max_age = 65
var est_amount = 2
var tot = (est_amount * (65-20))
document.write("Favourite snack: "  + fav_snack + "<br>")
document.write("Current age :"  + cur_age + "<br>")
document.write("Estimated maximum age: "  + max_age + "<br>")
document.write("Amount of Snacks per day :"  + est_amount + "<br>")
document.write("You will need  " + tot + " " + fav_snack + "  to last you until the ripe age of  " + max_age)



