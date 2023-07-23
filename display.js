
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
   background-position: top center;
   position: absolute;
  background-size: cover;
  position: absolute;
  overflow: hidden;
  color: white;
 }
 #myVideo{
   height: 720px;
   width: 360px;
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
