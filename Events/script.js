let btn= document.getElementById('btn');
btn.addEventListener("click",()=>{
    document.getElementById("btn").style.backgroundColor="red";
})
btn.addEventListener("mouseover",()=>{
    document.getElementById("btn").style.backgroundColor="blue";
})
btn.addEventListener("mouseout",()=>{
    document.getElementById("btn").style.backgroundColor="green";
})
btn.addEventListener("dblclick",()=>{
    document.getElementById("btn").style.backgroundColor="yellow";
})
btn.addEventListener("click",()=>{
  document.querySelector(".box").innerHTML="<b>YAYYY YOU WERE CLICKED</b>  ENJOYYYYY!"})

  btn.addEventListener("onclick",()=>{
    document.qyeryselector(".btn").innerHTML="<b>YAYYY YOU WERE CLICKED</b>  ENJOYYYYY!"})

    btn.addEventListener("keyup",()=>{
      document.qyeryselector(".btn").innerHTML="<b>YAYYY YOU WERE CLICKED</b>  ENJOYYYYY!"
    })

