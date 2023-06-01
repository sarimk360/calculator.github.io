let stringy = " ";
let elements = document.querySelectorAll(".buttons");
Array.from(elements).forEach((btn)=>
{    
    btn.addEventListener('click',(clicker)=>
    {
    if(clicker.target.value == '=')
    {
        stringy = eval(stringy).toString();
        document.getElementById("display").value = stringy;
    }
    else if(clicker.target.value == 'DE')
    {
        stringy= stringy.slice(0,-1);
        document.getElementById("display").value = stringy;
    }
    else if(clicker.target.value == 'AC')
    {
        stringy="";
        document.getElementById("display").value = stringy;
    }
    else
    {
        stringy=stringy + clicker.target.value;
        document.getElementById("display").value = stringy;
    }
})
})