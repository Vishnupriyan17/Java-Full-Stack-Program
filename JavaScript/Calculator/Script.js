var a='';
var index = 0;
var operator = "";
function cleardisplay(){
     a="0";
    document.getElementById("display").innerHTML=a;
}
function val(num){

    a = a+num;
    document.getElementById("display").innerHTML=a;
    
    

       
    for(i = 0;i<a.length;i++){
        if(a.charAt(i)== "+"){
            operator = a.charAt(i);
            index = i;
        }
        else if(a.charAt(i)== "-"){
            operator = a.charAt(i);
            index = i;
        }
        else if(a.charAt(i)== "*"){
            operator = a.charAt(i);
            index = i;
        }
        else if(a.charAt(i)== "/"){
            operator = a.charAt(i);
            index = i;
        }
        else if(a.charAt(i)== "%"){
            operator = a.charAt(i);
            index = i;
        }
    }
    var n1 = parseInt(a.substring(0,index));
    var n2 = parseInt(a.substring(index+1,a.length-1));


    // switch(operator)
    // {
    //     case "+":
    //     (document.getElementById('display').innerHTML=(n1+n2));
    //     a = '';
    //     break;

    //     case "-":
    //     (document.getElementById('display').innerHTML=(n1-n2));
    //     a = '';
    //     break;

    //     case "*":
    //     (document.getElementById('display').innerHTML=(n1*n2));
    //     a = '';
    //     break;

    //     case "/":
    //     (document.getElementById('display').innerHTML=(n1/n2));
    //     a = '';
    //     break;

    //     case "%":
    //     (document.getElementById('display').innerHTML=(n1%n2));
    //     a = '';
    //     break;
    // }
    }

function back(){
    a =(a.slice(0,-1));
    document.getElementById("display").innerHTML=a;
}
function equal(n1,n2){
    // let s = a.charAt(1);
    // let n1 = parseInt(a.charAt(0));
    // let n2 = parseInt(a.charAt(2));
    // var index = 0;
    // for(i = 0;i<a.length;i++){
    //     if(a.charAt(i)== "+"){
    //         operator = a.charAt(i);
    //         index = i;
    //     }
    //     else if(a.charAt(i)== "-"){
    //         operator = a.charAt(i);
    //         index = i;
    //     }
    //     else if(a.charAt(i)== "*"){
    //         operator = a.charAt(i);
    //         index = i;
    //     }
    //     else if(a.charAt(i)== "/"){
    //         operator = a.charAt(i);
    //         index = i;
    //     }
    //     else if(a.charAt(i)== "%"){
    //         operator = a.charAt(i);
    //         index = i;
    //     }
    // }
    // var n1 = parseInt(a.substring(0,index));
    // var n2 = parseInt(a.substring(index+1,a.length-1));

    switch(operator)
    {
        case "+":
        (document.getElementById('display').innerHTML=(n1+n2));
        a = '';
        break;

        case "-":
        (document.getElementById('display').innerHTML=(n1-n2));
        a = '';
        break;

        case "*":
        (document.getElementById('display').innerHTML=(n1*n2));
        a = '';
        break;

        case "/":
        (document.getElementById('display').innerHTML=(n1/n2));
        a = '';
        break;

        case "%":
        (document.getElementById('display').innerHTML=(n1%n2));
        a = '';
        break;
    }
}

