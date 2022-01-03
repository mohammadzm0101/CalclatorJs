var shoingReslt=document.getElementById('ResltNumber');
var reslut1=document.getElementById('resultNum1');
var reslut2=document.getElementById('resultNum2');
var rey=document.getElementById('roydad');
var secoeationOprator=0; //1 plus 2 mines 3 div 4 zarb
var secoeationNumber1;
var secoeationNumber2;
function setNumber1()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=1;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=1;
        secoeationNumber1=1;
    }
    
}
function setNumber2()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=2;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=2;
        secoeationNumber1=1;
    }
    
}
function setNumber3()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=3;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=3;
        secoeationNumber1=1;
    }
    
}
function setNumber4()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=4;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=4;
        secoeationNumber1=1;
    }
    
}
function setNumber5()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=5;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=5;
        secoeationNumber1=1;
    }
    
}
function setNumber6()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=6;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=6;
        secoeationNumber1=1;
    }
    
}
function setNumber7()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=7;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=7;
        secoeationNumber1=1;
    }
    
}
function setNumber8()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=8;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=8;
        secoeationNumber2=1;
    }
    
}
function setNumber9()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=9;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=9;
        secoeationNumber2=1;
    }
    
}   
    function setNumber0()
{
    
    
    if(secoeationOprator!=0)
    {
        reslut2.innerHTML+=0;
        secoeationNumber2=1;
    }
    else {
            reslut1.innerHTML +=0;
        secoeationNumber2=1;
    }
    
}
function plus()
{
    secoeationOprator=1;
    if(secoeationNumber1==1||secoeationNumber2==1)
    {
        rey.innerHTML="+";
    }
    else
    {
        alert("pless input number ")
    }
    
}
function mines()
{
    secoeationOprator=2;
    if(secoeationNumber1==1||secoeationNumber2==1)
    {
        rey.innerHTML="-";
    }
    else
    {
        alert("pless input number ")
    }
}
function div()
{
    secoeationOprator=3;
    if(secoeationNumber1==1||secoeationNumber2==1)
    {
        rey.innerHTML="/";
    }
    else
    {
        alert("pless input number ")
    }
}
function zarb()
{
    secoeationOprator=4;
    if(secoeationNumber1==1||secoeationNumber2==1)
    {
        rey.innerHTML="*";
    }
    else
    {
        alert("pless input number ")
    }
}
function Res()
{
   
     if(secoeationNumber1==1||secoeationNumber2==1)
     {
        if(secoeationOprator==1)
        {
            num1=reslut1.innerHTML;
            num2=reslut2.innerHTML;
            
            shoingReslt.innerHTML=(Number(num1)+Number(num2));        
        }
        else if(secoeationOprator==2)
        {
            num1=reslut1.innerHTML;
            num2=reslut2.innerHTML;
            
            shoingReslt.innerHTML=(Number(num1)-Number(num2));        
        }
        else if(secoeationOprator==3)
        {
            num1=reslut1.innerHTML;
            num2=reslut2.innerHTML;
            
            shoingReslt.innerHTML=(Number(num1)/Number(num2));        
        }
        else if(secoeationOprator==4)
        {
            num1=reslut1.innerHTML;
            num2=reslut2.innerHTML;
            
            shoingReslt.innerHTML=(Number(num1)*Number(num2));        
        }
        else{
            alert("Pless shouse on of oprator")
        }
     }
     else
     {
         alert("Pless input Number")
     }
    
    
}