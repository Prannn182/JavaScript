// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
let num=[1,2,2,3,4,4,5,6,7,7,8]
let double=[]
for(let i=0;i<num.length;i++){
  if(i>0 && num[i]==num[i-1]){
    double.push(num[i])
  }else{
    double.push(num[i]*2)
  }
}
console.log('double:', double);
