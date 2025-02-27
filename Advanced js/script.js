// iife := we can use async without funnction invoking (Immediately Invoked Function Expression)
async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

(async function main() {
  let a = await sleep();
  console.log(a);
})();
