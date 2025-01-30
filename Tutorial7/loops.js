let arr=[1,52,3,44,5,6];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
   

arr.forEach((value,index,arr) => {
    console.log(value,index);
});
// console.log(arr.sort());
let a={
    1:1,
    2:2,
    3:3
}
//for in loop
for (const key in a) {
    if (Object.prototype.hasOwnProperty.call(a, key)) {
        const element = a[key];
        console.log(key,element);
        
    }
}
///for of loop
for (const element of arr) {
    console.log(element);
}
