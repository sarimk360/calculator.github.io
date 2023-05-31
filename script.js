let string = "";
let btn=document.querySelectorAll('.buttons');
Array.from(btn).forEach((button)=>
{
    button.addEventListener("click",(e)=>
    {
        if(e.target.innerHTML == '=')
        {
            string.eval(string);
            document.querySelector('display').value=string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string="";
            document.querySelector('display').value=string;
        }
        else
        {
            console.log(e.target)
            string=string + e.target.innerHTML;
            document.querySelector('display').value=string;
        }
    })
})