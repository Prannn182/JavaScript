alert('This is promise file');
console.log('promise.js');
// Promise is a promise of code execution 
let prom = new Promise((resolve, reject) => {
    let a=Math.random();
    if(a<0.5){
        reject("number is not supported");
    }
    else{
        setTimeout(() => {
            console.log("i am a promise");
            resolve("pranali 1");
    },1000)
    }
});
let prom1 = new Promise((resolve, reject) => {
    let a=Math.random();
    if(a<0.5){
        reject("number is not supported");
    }
    else{
        setTimeout(() => {
            console.log("i am a promise");
            resolve("pranali 2");
    },1000)
    }
});
let p=Promise.all([prom,prom1]);
p.then((a)=>{
    console.log(a); // a is the value passed to resolve
}).catch((err)=>{
    console.log(err); // err is the value passed to reject
})
let p1=Promise.allSettled([prom,prom1]);
p1.then((a)=>{
    console.log(a); // a is the value passed to resolve
}).catch((err)=>{
    console.log(err); // err is the value passed to reject
})
prom.then((a)=>{
    console.log(a); // a is the value passed to resolve
}).catch((err)=>{console.log(err)});