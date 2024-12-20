let tasks=[];


let choice=prompt("Enter your choice");

console.log(choice);

while(true){
if(choice=="Add"){
    let len=tasks.length+1;
    let task=prompt("Enter the task");
    let newtask=len+" "+ task;
    tasks.push(newtask);
    console.log("Added");
}else if(choice=="List"){
    console.log("----------");
    for(t of tasks){
        console.log(t);
    }
    console.log("----------");

}else if(choice=="Delete"){
    let index=prompt("Enter your task no");
    tasks.splice((index-1),1);

}
if(choice=="Quit"){
    console.log(choice);
    break;
}
choice=prompt("Enter your choice");


}