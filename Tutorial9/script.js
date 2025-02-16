document.querySelector(".box")
<div class=​"box">​hey i am a box​</div>​
document.querySelector(".box").innerHTML
'hey i am a box'
document.querySelector(".container").innerHTML

document.querySelector(".container").innerHTML
'\n        <div class="box">hey i am a box</div>\n    '
document.querySelector(".box").innerText
'hey i am a box'
document.querySelector(".box").outerHTML
'<div class="box">hey i am a box</div>'
document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">hey i am a box</div>\n    </div>'
document.querySelector(".container").tagName
'DIV'
document.querySelector(".container").hidden
false
document.querySelector(".container").hidden=true
true
document.querySelector(".container").innerHTML='hey i am pranali' 
'hey i am pranali'
document.querySelector(".box").hasAttribute("style")
    
true
document.querySelector(".box").getAttribute("style")
    
'display: flex;'
document.querySelector(".box").setAttribute("style","display:inline")
    
undefined
document.querySelector(".box").setAttribute("style",'display:inline')
    
undefined
document.querySelector(".box").setAttribute("style","display:inline")
document.querySelector(".box").removeAttribute("style")
document.designMode="on"