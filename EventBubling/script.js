document.querySelector(".child").addEventListener("click",(e)=>{
    alert("Child Clicked");
    e.stopPropagation(); //This will stop the event bubbling
})
document.querySelector(".childContainer").addEventListener("click",(e)=>{
    alert("Parent Clicked");
    e.stopPropagation(); //This will stop the event bubbling
})
document.querySelector(".container").addEventListener("keydown",(e)=>{
   console.log(e,e.key.e.keyCode);
    
})
// let a=setInterval(()=>{
//     document.querySelector(".child").style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
// },3000)
// console.log(a);

//setTimeout
let b= setTimeout(() => {
    document.querySelector(".child").style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
}, 1000);
console.log(b);