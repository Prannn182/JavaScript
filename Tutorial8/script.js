console.log("hello world");
// selecting by class
// let p=document.getElementsByClassName("box");
// console.log(p);
// p[2].style.backgroundColor="red";
// selecting by id
// document.getElementById("red").style.backgroundColor="red";
// selecting by QUERYSELECTOR
document.querySelector(".box").style.backgroundColor="gray";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green";
}) 
// by for loop
const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "green";
}
e=document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div#red.box, div.box, div.box, div.box, red: div#red.box]
e[3].mat
undefined
e[3].matches("#red")
true
e[3].matches(".red")
false
e[3].matches(".box")
true
