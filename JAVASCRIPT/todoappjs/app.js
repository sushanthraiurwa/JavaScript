

let btn=document.querySelector("button");
let ul=document.querySelector("ul");



btn.addEventListener("click",function(){
addlist();

});

document.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
addlist();
    }
});

function addlist(){
let input=document.querySelector("input");
let li=document.querySelector("li");


    let items= document.createElement("li");
     let deldtn=document.createElement("button");
     deldtn.innerText="delete";
     deldtn.classList.add("delete");
    let values=input.value;
    input.value="";
    items.innerText=values;  
    items.appendChild(deldtn)  
    ul.appendChild(items);
   ;
}


ul.addEventListener("click",function(event){
let koun=event.target.nodeName;
console.dir(event.target);
if(koun=="BUTTON"){
    let para=event.target.parentElement;
    para.remove();

}
});




