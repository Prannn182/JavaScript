alert("you can be get hacked");
function getRandomnum() {
  return Math.floor(Math.random() * 7000);
}

async function hack() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Initializing hacking...");
    }, getRandomnum());
  });
}
async function hack1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hacking started...");
    }, getRandomnum());
  });
}
async function hack2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetching data...");
    }, getRandomnum());
  });
}
async function hack3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hacking completed...");
    }, getRandomnum());
  });
}
// function display(message) {
//    let p= document.createElement("p")
//     p.textContent=message
//     document.body.appendChild(p)
// }
async function MediaDeviceInfo() {
  let a= await hack();
    console.log(a);
    let b = await hack1();
    console.log(b);
    let c = await hack2();
    console.log(c);
    let d = await hack3();
    console.log(d);
}
MediaDeviceInfo();
