// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },3000)
//     })
// }
async function getData() {
 
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data=await x.json();
    // let data1=await x.text();
    console.log(data);
    // console.log(data1);
    // console.log(x);
    
  }
  async function getData() {
 
    const data = { name: 'Pranjal', age: 25 };
   await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => console.log(result));
    console.log(data);
    
    
  }

async function main() {
  //await cant be used without async
  console.log("This is the first line of the code");
  let data = await getData(); //This line will wait for the data to come from the getData function
  console.log(data);
  console.log("This is the last line of the code 1");
  console.log("This is the last line of the code 2");
  console.log("This is the last line of the code 3");
}
main();
