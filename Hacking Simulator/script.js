alert("you can be get hacked");
const addItem = async (item) => {
  await getRandomnum();
 let div= document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};
const getRandomnum=()=> {
  return new Promise((resolve) => {
    let timeout = Math.floor(Math.random() * 7000);
    setTimeout(() => {
      resolve(timeout);
    }, timeout);
  });
}


async function startHacking(){
    let text = [
        "Hacking Initialized",
        "Reading your files",
        "Hacking your webcam",
        "Hacking your microphone",
        "Hacking your location",
        "Hacking your bank",
        "Successfully hacked",
        "You are hacked",
      ];
      setInterval(() => {
        let last=document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
        }else{
            last.innerHTML=last.innerHTML+"."
        }
      },500)

    for (let items of text) 
        {
          await addItem(items);
       } 
}
startHacking()


