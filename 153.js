//My solution
var button = document.querySelector("button");
var background = document.querySelector("body");

button.addEventListener("click", function() {

    if (background.style.background == "purple"){
        background.style.background ="white";
    }else{
        background.style.background ="purple";

    }

});



//Udemy solution 1 (Boolean)
var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
    if(isPurple){
        document.body.style.background = "white";
    }else{
        document.body.style.background = "purple";
    }
    //Toggles isPurple between true and false
    isPurple = !isPurple;
});



//Udemy solution 2 (Quickest - Toggle CSS class)
var button = document.querySelector("button");

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});










