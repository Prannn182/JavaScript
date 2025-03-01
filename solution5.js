//The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
function sumuntillneg(arr){
    let sum=0;
    for (const a of arr) {
        if(a<0){
            break;
            
        }
        sum+=a;
        
    }
    return sum;
}
console.log(sumuntillneg([1,2,3,4,5,6,7,-2,8,9,10,11,12,13,14,15,16,17,18,19,20]));