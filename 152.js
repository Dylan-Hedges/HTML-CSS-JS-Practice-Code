//--------Example-----------------------------------------------------------
element.addEventListener(type, functionToCall);

//--------Clicking a button and printing to console-------------------------
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});


//-----Clicking a button and changing a <p> (Function inside of Listener)---
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", function() {
  paragraph.textContent = "Someone Clicked the Button!";
});


//----Clicking a button and changing a <p> (Function outside of Listener)---
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
  paragraph.textContent = "Someone Clicked the Button!";
}



//----Change <p> when hovering over the text - using "this" (short version)-
var paragraph = document.querySelector("p");

//SETUP MOUSE OVER LISTENER (hovering)
paragraph.addEventListener("mouseover", function() {
  this.textContent = "Stop hovering over me!";
});

//SETUP MOUSE OUT LISTENER (not hovering)
paragraph.addEventListener("mouseout", function() {
  this.textContent = "Phew, thank you for leaving me alone";
});


//--------Change <p> when hovering over the text - (long version)--------
var paragraph = document.querySelector("p");

//SETUP MOUSE OVER LISTENER
paragraph.addEventListener("mouseover", function() {
  paragraph.textContent = "Stop hovering over me!";
});

//SETUP MOUSE OUT LISTENER
paragraph.addEventListener("mouseout", function() {
  paragraph.textContent = "Phew, thank you for leaving me alone";
});
