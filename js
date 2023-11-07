//Nav Bar Js

// Rotating quotes
let quotes = ["Quote 1", "Quote 2", "Quote 3"];
let currentQuoteIndex = 0;
let textSliderElement = document.querySelector(".text-slider");

// Change quote every 7 seconds
setInterval(changeQuote, 7000);

function changeQuote() {
  textSliderElement.innerHTML = quotes[currentQuoteIndex];
  textSliderElement.style.animation = "none";
  setTimeout(() => {
    textSliderElement.style.animation = "moveUp 1s ease-in-out";
  }, 0);
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

// Dark Mode Toggle
let toggleSwitchElement = document.querySelector(".slider");
let toggleLabelElement = document.querySelector(".toggle-label");
let circleElement = document.querySelector(".circle");  // New
let isDarkMode = false;

toggleSwitchElement.addEventListener("click", function() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    toggleLabelElement.textContent = "On";
    document.body.style.backgroundColor = "black";
  } else {
    toggleLabelElement.textContent = "Off";
    document.body.style.backgroundColor = "white";
  }
  
  circleElement.style.left = isDarkMode ? "27.5px" : "2.5px";  // Updated
});

// Scrolling Text
let scrollingTextElement = document.querySelector(".scrolling-text");
let textContent = "The Matrix is everywhere, Neo.";
scrollingTextElement.innerHTML = textContent;

function scrollText() {
  let firstChar = textContent.charAt(0);
  let remainingText = textContent.slice(1);
  textContent = remainingText + firstChar;
  scrollingTextElement.innerHTML = textContent;
}

// Scroll text every 200ms
setInterval(scrollText, 200);


//New JS
const burger = document.querySelector('.toggle-button');
const toggleClass = document.querySelector('.nav-list');
const linkLi = document.querySelectorAll('.nav-list ul li');


burger.addEventListener('click',()=>{
    toggleClass.classList.toggle('active');
    burger.classList.toggle('trg');

    linkLi.forEach((element,index) => {
        if (element.style.animation){
            element.style.animation=''
        }else{
            element.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
        }
        
    });
});
burger();
