// let array=[10,20,30,40,505];

// let result=array.reduce((min,ele)=>{if(min<ele){
//     return min;
// }else{
//     return ele;
// }} );
// console.log(result);

// array.sort;


// const data={
//     email : "sushau",
//     pass: "abcde"
// };

// console.log(data);

// const datacopy={...data,id: 10};

// console.log(datacopy);




// function min(){
//     console.log(arguments);
// }


//Squareandsumthearrayelementsusingthearrowfunctionandthenfindtheaverageofthearray

// let arr=[1,2,3,4,5]

// function sqSum(arr){
//     return arr.reduce((sum,ele)=>{
//       let ans= ele*ele
//       return sum+ans;
//     });
// }

// let sum=sqSum(arr);
// console.log(sum);





// Createanewarrayusingthemapfunctionwhoseeachelementisequaltotheoriginalelementplus5

// let arr=[10,20,30]
// let ans= arr.map((ele)=>ele+5);


// console.log(ans);


// Createanewarraywhoseelementsareinuppercaseofwordspresentintheoriginalarray

// let arr=["hi","HELLO","KYA"];

// let ans=arr.map((ele)=>{
//     return ele.toUpperCase()  ;
// });

// console.log(ans);



//WriteafunctioncalleddoubleAndReturnArgswhichacceptsanarrayandavariablenumberofarguments.Thefunctionshouldreturnanewarraywiththeoriginalarrayvaluesandalloftheadditionalargumentsdoubled
// const doubleandReturnArgs=(arr,...args)=>{
//     return [...arr, args.map((el)=> el*2)];

// }

// let ans=doubleandReturnArgs([10,20,30],5,10,15);
// console.log(doubleandReturnArgs([10,20,30],5,10,15));


// WriteafunctioncalledmergeObjectsthatacceptstwoobjectsandreturnsanewobjectwhichcontainsallthekeysandvaluesofthefirstobjectandsecondobject

// const mergeobject=(obj1,obj2)=>({...obj1,...obj2}); 

// console.log(mergeobject({a:1,b:2},{c:3,d:4}));