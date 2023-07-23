
const container = document.getElementById("container")
const msg = document.getElementById("msg")
const msgBtn = document.getElementById("msg-btn")

let displayCss = `
 <video autoplay muted id="myVideo">
  <source src="happyBirthday.mp4" type="video/mp4">
 </video>
 <style>
 body{
   background-color: black;
   background-repeat: no-repeat;
   background-position: top cencr:
 }
 #myVideo{
   height: 2000px;
   width: 800px;
 }
 </style>
 `

msgBtn.addEventListener("click", function(){
   container.innerHTML = displayCss 
   playSound()
})

function playSound(){
  let ding = new Audio('happyBirthday.mp3')
  ding.play()
}
