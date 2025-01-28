//Loops in Js
for(let i=0;i<10;i++){

    console.log(i);
}
for (var a = 1; a < 10; a++) {
  console.log(a + 1);
}
//for-in
var obj = {
  name: "John",
  role: "Developer",
  company: "Google",
};
//for of
for (const key in obj) {
   const element = obj[key];
    console.log(key, element);
  }

//for-of
for (const c of "PRANALI") {
    console.log(c);
    
}
//while
let i=0;
while (i<8) 
    { i++;
    console.log(i);
    
}
//do-while
do {
    let i=8;
    console.log(i);
    i++;
} while (i<8);