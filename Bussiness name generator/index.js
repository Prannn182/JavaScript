console.log("Bussiness name generator");
let a1={
    1:"Crazy",
    2:"Amazing",
    3:"Fire",
}
let a2={
    1:" Engine ",
    2:" Food ",
    3:" Garments "
}
let a3={
    1:" Bros ",
    2:" Limited ",
    3:" Hub "
}
var ran1=Math.floor(Math.random()*3);
var ran2=Math.floor(Math.random()*3);
var ran3=Math.floor(Math.random()*3);

console.log(a1[ran1]+ a2[ran2]+a3[ran3]);
