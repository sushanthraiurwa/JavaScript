let body=document.querySelector("body");
let ptag= document.createElement("p");
ptag.style.color="red";
ptag.innerText="hey Iam red";
body.append(ptag);

let htag=document.createElement("h3");
htag.style.color="blue";
htag.innerText="Hi i am bluee";
body.append(htag);


let divtag=document.createElement("div");
divtag.style.backgroundColor="pink";
divtag.style.borderColor="black";
body.append(divtag);
let h1div=document.createElement("h1");
h1div.innerText="I am i n div";
divtag.append(h1div);

let pdiv=document.createElement("p");
pdiv.innerText="me too";
divtag.append(pdiv);

let bu=document.createElement("button");
let inpu=document.createElement("input");


bu.innerText="click me";
body.append(bu);
body.append(inpu);

bu.setAttribute("id","btn");
inpu.setAttribute("placeholder","username");


let buttonid=document.querySelector("#btn");
buttonid.classList.add("coloredit");


let h1elemnt = document.createElement("h1");
h1elemnt.innerText="dom practicice";
h1elemnt.classList.add("h1edit")

body.prepend(h1elemnt);

let ptagap=document.createElement("p");
ptagap.innerHTML="apna colle <b>delta</b> practice";


body.append(ptagap);











