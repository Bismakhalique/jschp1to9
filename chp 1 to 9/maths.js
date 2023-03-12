// <---QUESTION#1---->

var a = 10;
var b =  0;
document.write("Result:" +"<br/>");
document.write("The value of a is: " ,+  a+ "<br/>" );
document.write("<br/>");
var c = ++a;
document.write("The value of ++a is: " ,+ c +"<br/>" );
document.write("Now the value of a is: " ,+  a+ "<br/>" );
document.write("<br/>");
var d = a++;
document.write("The value of a++ is: " ,  + d + "<br/>" );
document.write("Now the value of a is: " ,+  a+ "<br/>" );
document.write("<br/>");
var e = --a;
document.write("The value of --a is: "  ,  + e +"<br/>");
document.write("Now the value of a is: " ,+  a + "<br/>" );
document.write("<br/>");
var f= a--;
document.write("The value of a-- is:"  ,  + f +"<br/>" );
document.write("Now the value of a is: " ,+  a+ "<br/>" );
//////////////////////////////////////////////
/////////////////////////////////////////
document.write("<br>");
document.write("<br>");
var a = 2;
var b =  1;
--a;
document.write( "--a;" ,  a)
document.write("<br>");
var c = --a - --b;
document.write(  "--a - --b;" , c);
document.write("<br>"); 
var d = --a - --b + ++b;

document.write( "--a - --b + ++b;" , d);
document.write("<br>");
var e = --a - --b + ++b + b--;
document.write( " --a - --b + ++b + b--;" , e);

/////////////////////////////////////////
document.write("<br>");
document.write("<br>");
var name = prompt("your name?", "BISMA");
var quetion = "your name?";
var defaultanswer = "BISMA";

var name = prompt(quetion,defaultanswer);
var age = prompt("your age?" , "19");
var question = "your age?";
var defaultanswer = "19";

var message="THANK YOU BISMA!"; 
var greet="THANKS FOR VISITING";
alert(message);
alert(greet);

/////////////////////////////////////////////