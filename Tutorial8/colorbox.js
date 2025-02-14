console.log("Hello World");
function getRandomHexColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}
console.log(getRandomHexColor()); // Example output: #f1c40f
document.body.style.backgroundColor=getRandomHexColor();
// document.body.box.style.Color=getRandomHexColor();

document.querySelectorAll(".box").forEach(
    box=>{box.style.backgroundColor=getRandomHexColor()}
)