var a='';



function cleardisplay()
{
     a="";
    document.getElementById("display").innerHTML=a;
}


function back()
{
    a =(a.slice(0,-1));
    document.getElementById("display").innerHTML=a;
}



function val(num)
{
    a = a+num;
    document.getElementById("display").innerHTML=a; 
}



function equal()
{
    var index = 0;
    var operator = "";
   document.getElementById("length").innerHTML=a.length;
    for(i = 1;i<=a.length;i++){
        if(a.charAt(i)== "+"){
            operator = a.charAt(i);
            index = i;
            break;
        }
        else if(a.charAt(i)== "-"){
            operator = a.charAt(i);
            index = i;
            break;
        }
        else if(a.charAt(i)== "*"){
            operator = a.charAt(i);
            index = i;
            break;
        }
        else if(a.charAt(i)== "/"){
            operator = a.charAt(i);
            index = i;
            break;
        }
        else if(a.charAt(i)== "%"){
            operator = a.charAt(i);
            index = i;
            break;
        }
    }
    var n1 = parseInt(a.substring(0,index));
    var n2 = parseInt(a.substring(index,a.length));  
    var symbol = operator

    switch(symbol)
    {
        case "+":
        a= n1+n2;
        document.getElementById('display').innerHTML=a;
        a = a;
        break;

        case "-":
         a= n1-n2;
        document.getElementById('display').innerHTML=a;
        a = a;
        break;

        case "*":
        a= n1*n2;
        document.getElementById('display').innerHTML=a;
        a = a;
        break;

        case "/":
            a= n1/n2;
            document.getElementById('display').innerHTML=a;
            a = a;
            break;

        case "%":
            a= n1%n2;
            document.getElementById('display').innerHTML=a;
            a = a;
            break;
    }
}
