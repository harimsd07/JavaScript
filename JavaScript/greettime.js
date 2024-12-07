now =new Date();

hrs=now.getHours();
min=now.getMinutes();
secs=now.getSeconds();

document.write("<h2>")
document.write(hrs +":"+ min +":"+ secs);
document.write("</h2>");

document.write("<p>");
if(hrs<10) document.write("Good Morning");
else if(hrs>=14 && hrs<17) document.write("Good Afternoon");
else if(hrs>17) document.write("Good Evening");
else document.write("Good Day");
document.write("</p>");