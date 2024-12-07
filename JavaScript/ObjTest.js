function ObjTest(){
    line1="<b>Name:</b>" + this.name + "<br>\n";
    line2="<b>Address:</b>" + this.address + "<br>\n";
    line3="<b>MobNo:</b>" + this.mobno + "<br>\n";
    document.write(line1,line2,line3);
}

function FuncwithPara(name,address,mobno){


this.name=name;
this.address=address;
this.mobno=mobno;
this.ObjTest=ObjTest;


}

obj=new FuncwithPara("hari","ezhilnagar,trichy-14","9865012567");

obj.ObjTest();
