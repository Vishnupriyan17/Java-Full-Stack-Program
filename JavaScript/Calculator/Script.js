var a='';
function cleardisplay(){
     a="0";
    document.getElementById("display").innerHTML=a;
}
function val(num){
    a = a+num;
    document.getElementById("display").innerHTML=a;
}
function back(){
    a =(a.slice(0,-1));
    document.getElementById("display").innerHTML=a;
}
function qual(){
    document.getElementById("display").innerHTML=eval(a);
    a='';

}

