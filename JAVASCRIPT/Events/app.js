let btn=document.querySelector("button");

function randomColor(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let color=`rgb(${red}, ${blue}, ${green})`;
    return color;
}

btn.addEventListener("click",function(){
    let h3=document.querySelector("h1");
    let randomno= randomColor();
    h3.innerText=randomno;

    let divtag=document.querySelector("div");
    divtag.style.backgroundColor=randomno;


});

