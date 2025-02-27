// iife := we can use async without funnction invoking (Immediately Invoked Function Expression)
async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
//Destructuring
(async function main() {
    console.log(a1);
    
  let a = await sleep();
  console.log(a);
  let[x,y,...j]=[1,2,6,8,9,77,15,46,32];
    console.log(x,y,j);
    //destructuring in object
    let obj={name:'Rahul',age:20};
     const {name,age}=obj;
     console.log(name,age);
     // Spread syntax
     function sum(x,y,z){
        return x+y+z
     }
     let arr=[1,2,3];
    console.log(arr[0]+arr[1]+arr[2]);
     console.log(sum(...arr));
     var a1=6; //hoisting
    
})();



