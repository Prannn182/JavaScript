let array=[1,2,3,4,5,6,7,8,9,10];
//by using map function

// using for-loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newarr.push(element**2);
    
// }console.log(newarr);

let newarr=array.map((e)=>{
    return e**2
});
console.log(newarr);
//filter function
const greaterthanseven=(e)=>{
    if(e>7){
        return true
    }return false
}
console.log(array.filter(greaterthanseven));  
let arr=[1,2,3,4,5,6];
//reduce function
const red=(a,b)=>{
 return a*b;
}
console.log(arr.reduce(red));
//from function
console.log(Array.from("Pranali"));
