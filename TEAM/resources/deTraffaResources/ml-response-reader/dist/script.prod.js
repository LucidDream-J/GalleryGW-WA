"use strict";var main=document.querySelector("main"),voicesSelect=document.getElementById("voices"),textarea=document.getElementById("text"),readBtn=document.getElementById("read"),toggleBtn=document.getElementById("toggle"),closeBtn=document.getElementById("close"),data=[{image:"./img/doctor.jpg",text:" has a dick"},{image:"./img/scared.jpg",text:"I'm scared"},{image:"./img/oppression.jpg",text:"I'm So Oppressed  all this money"},{image:"./img/hurt.jpg",text:"I'm Hurt"},{image:"./img/happy.jpg",text:"I'm very Happy"},{image:"./img/bigot.jpg",text:" your a bigot"},{image:"./img/sad.jpg",text:"I'm Sad"},{image:"./img/microaggression.jpg",text:"your a little bigot"},{image:"./img/school.jpg",text:"I Want To Go To School"},{image:"./img/education2.jpg",text:"I Want To Go Outside"},{image:"./img/home.jpg",text:"Im not oppressed"},{image:"./img/education.jpg",text:"see no hear no speak no "},{image:"./img/gramsci.jpg",text:"triump by capturing culture"},{image:"./img/peasants.jpg",text:"let them eat ice cream"},{image:"./img/media.jpg",text:"Say no to covid"},{image:"./img/peaceful.jpg",text:"peaceful protest starter pack"},{image:"./img/biden.jpg",text:"you aint black"},{image:"./img/vote1.jpg",text:"you aint hispanic"},{image:"./img/smurf2.jpg",text:"so i aint black...smurfs rule anyway"},{image:"./img/vote2.jpg",text:"you aint in the hood"},{image:"./img/liebig.jpg",text:"lie big and repeat"},{image:"./img/freeshit.jpg",text:"Save the Planet stop cows farting"},{image:"./img/mark.jpg",text:"community standards"},{image:"./img/ms13.jpg",text:"she thinks we be stupid"},{image:"./img/puffin.jpg",text:"she thinks we are stupid"}];function createBox(e){var t=document.createElement("div"),i=e.image,a=e.text;t.classList.add("box"),t.innerHTML='\n    <img src="'.concat(i,'" alt="').concat(a,'" />\n    <p class="info">').concat(a,"</p>\n  "),t.addEventListener("click",function(){setTextMessage(a),speakText(),t.classList.add("active"),setTimeout(function(){return t.classList.remove("active")},800)}),main.appendChild(t)}data.forEach(createBox);var mobilenet,puffin,label,prob,message=new SpeechSynthesisUtterance,voices=[];function getVoices(){(voices=speechSynthesis.getVoices()).forEach(function(e){var t=document.createElement("option");t.value=e.name,t.innerText="".concat(e.name," ").concat(e.lang),voicesSelect.appendChild(t)})}function setTextMessage(e){message.text=e}function speakText(){speechSynthesis.speak(message)}function setVoice(t){message.voice=voices.find(function(e){return e.name===t.target.value})}function modelReady(){console.log("Model is ready!!!"),mobilenet.predict(puffin,gotResults)}function gotResults(e,t){e?console.error(e):(console.log(t),label=t[0].className,prob=t[0].probability,fill(255),textSize(32),text(label,10,height/2),createP(label),createP(prob))}function imageReady(){}function setup(){createCanvas(500,100),(puffin=createImg("img/puffin.jpg")).hide(),background(0),console.log(puffin)}speechSynthesis.addEventListener("voiceschanged",getVoices),toggleBtn.addEventListener("click",function(){return document.getElementById("text-box").classList.toggle("show")}),closeBtn.addEventListener("click",function(){return document.getElementById("text-box").classList.remove("show")}),voicesSelect.addEventListener("change",setVoice),readBtn.addEventListener("click",function(){setTextMessage(textarea.value),speakText()}),getVoices(),mobilenet=ml5.imageClassifier("MobileNet",modelReady);