let url="https://dog.ceo/api/breeds/image/random";


let btn=document.querySelector("button");
let img=document.querySelector("img");

btn.addEventListener("click", async ()=>{
    let res= await  GetImage();
    console.log(res);
    console.log(img);
   img.setAttribute("src",res);

})

async function GetImage() {
    try{

        let res=await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log(e);

        return "Image not found";
    }
    
}