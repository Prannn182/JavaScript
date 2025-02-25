console.log("i am a hacker")
console.log("i am a hecker")

setTimeout(() => {
    console.log("i am a hacker2")
},2000);
const callback=(arg)=>{ //callback function PASSNG A FUNCTION USING A VARIABLE AS A FUNCTION
     //A callback is a function passed as an argument to another function
    console.log(arg);
}

let loadscript= (src,callback) =>{
  let sc=document.createElement("script");
   sc.src=src;
  sc.onload = callback("hey");
   document.head.append(sc); 
}
loadscript("",callback);