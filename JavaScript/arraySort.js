arrname=0;
var fname=new Array();

function NameSort(){
     thename=document.theform.newname.value;
     fname[arrname]=thename;
     arrname++;
     fname.sort();
     document.theform.sorted.value.fname.join("\n");

}