// let jsonRes=
// '{"fact":"The He cost his owner $50,000, making him one of the most expensive cats ever.","length":140}';


// let jsonObj=JSON.parse(jsonRes);


// console.log(jsonObj.fact);


// ///// obj to json

// let student ={
//     name: "sushanth rai",
//     class:  6,
//     salary :100000
// }

// let stringify= JSON.stringify(student);
// console.log(stringify);


let btn=document.querySelector("button");

let p=document.querySelector("p");

btn.addEventListener("click",async ()=>{
    let res= await Getfacts();
    console.log(res);
    p.innerText=res;

});

let url="https://catfact.ninja/fact";

async function Getfacts() {
    try{
        let result= await axios.get(url); //await becuase async it will contine the opration to next line 
        //let res=await result.json();
       
       return result.data.fact;

    }catch(e){
        console.log("eroor");
        return "fact not found";
    }
  
}


