a = new Array();
var i=0;

do{
    next=window.prompt("Enter the next name:");
    if(next>"") a[i]=next;
    i=i+1;
}while(next>"");

document.write("<h2>" + (a.length) +" "+ "names entered. <h2>");
document.write("<ol>");
for(i in a){
    document.write("<li>" + a[i] +"<br>");
}
document.write("</ol>");