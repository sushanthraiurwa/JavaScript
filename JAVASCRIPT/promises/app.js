// function saveODb() {
//     return new Promise((resolve, reject) => {
//         let internet = Math.floor(Math.random() * 10 + 1);
//         if (internet > 4) {
//             resolve("data saved successully");
//         } else {
//             reject("data not saved succesfully");
//         }
//     })



// }

// saveODb()
//     .then((result) => {
//         console.log("data 1 saved");
//         console.log(result);
//         return saveODb()

//     })
//     .then((result) => {
//         console.log("data 2 saved");
//         console.log(result);

//        return saveODb()
//     })
//     .then((result) => {
//         console.log("data 3 saved");
//         console.log(result);

//     })
//     .catch((error) => {
//         console.log("It was A failure");
//         console.log(error);

//     })



////Methods to change the color of H1


// let h1= document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((fulfil,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             fulfil("color changed");
    
//         },delay)
//     })
   
// }


// changeColor("blue",1000)
// .then((result)=>{
//     console.log(result);
//     return changeColor("red",1000)
// })
// .then((result)=>{
//     console.log(result);
//     return changeColor("blue",1000)
// })
// .then((result)=>{
//     console.log(result);
//     return changeColor("pink",1000)
// })
// .then((result)=>{
//     console.log(result);
//     return changeColor("yellow",1000)
// })
// .then((result)=>{
//     console.log(result);
//     return changeColor("green",1000)
// })

// .catch((eror)=>{
//     console.log(eror);
// })



//// changing using async and await
let h1= document.querySelector("h1");

 function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log("color changes")
            resolve();
        },delay);

    })
  
}

async function colorChange(){
   await changecolor("red",1000);
   await changecolor("blue",1000);

   await changecolor("yellow",1000);

   await changecolor("green",1000);

    await changecolor("pink",1000);

}

colorChange();