const url="http://universities.hipolabs.com/search?name=india";
let country;

let input=document.querySelector(".cnid");
let btn=document.querySelector("button");

let ul=document.querySelector("ul");


btn.addEventListener("click",async function(){
    let country=document.querySelector(".cnid").value;

    let college=await getColleges(country);
    show(college);
});

function show(colleges){
    ul.innerText="";
    for(college of colleges ){
        let li=document.createElement("li");
        li.innerText=college.name;
        ul.appendChild(li);

    }
}



async function getColleges(para) {
    try{
let response=await axios.get(url+para);
return response.data;

    }catch(e){
        console.log("error is : ",e);
        return [];
    }
    
}