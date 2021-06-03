const input = document.getElementById("filterList");

input.addEventListener("keyup",filterFunction);

function filterFunction()
{
let inputValue = input.value.toUpperCase();

let li = document.querySelectorAll("#item");

for(let i=0; i<li.length;i++)
{
    let a = li[i].getElementsByTagName("a")[0];

    if(a.innerHTML.toUpperCase().indexOf(inputValue) > -1)
    {
        li[i].style.display ="";
    }
    else{
        li[i].style.display ="none";
    }
}
}