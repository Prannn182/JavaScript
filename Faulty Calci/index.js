console.log("FAULTY CALCULATOR");
// const func=(a,b)=>{
   
//     console.log("the two numbers are " + a + " and "+ b);
// }
// func(5,6);
if(Math.random()<0.1){
    function wsum(a,b){
        return a-b;
    }
    function wminus(a,b){
        return a*b;
    }
    function wmul(a,b){
        return a+b;
    }
    function wdiv(a,b){
        return a**b;
    }

}else{
    function sum(a,b){
        return a+b;
}
function minus(a,b){
    return a-b;}

    function mul(a,b){
        return a*b;
    }
  function div(a,b){
        return a/b;
    }
}

let a=Math.random();
let b=Math.random();
if(Math.random()<0.1){
    console.log("the sum is :" + wsum(a,b));
    console.log("the minus is :" + wminus(a,b));
    console.log("the mul is :" + wmul(a,b));
    console.log("the div is :" + wdiv(a,b));
}else{
    console.log("the sum is :" + sum(a,b));
    console.log("the minus is :" + minus(a,b));
    console.log("the mul is :" + mul(a,b));
    console.log("the div is :" + div(a,b));
}
 //YOU CAN USE eval()
 console.log(`the result is ${eval(${a} ${c} ${b}`)}`);