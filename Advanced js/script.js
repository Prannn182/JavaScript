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
  let a = await sleep();
  console.log(a);
  let[x,y,...j]=[1,2,6,8,9,77,15,46,32];
    console.log(x,y,j);
})();



