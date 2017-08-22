//Define function with song lyrics
function sing(){
    console.log("twinkle twinkle...");
    console.log("little star...");
}

//setInterval(sing, 2); passes/executes the sing() function every 2 seconds
setInterval(sing, 2);

//clearInterval(11); stops the interval, 11 is a code provided by setInterval()
clearInterval(11);

//Anonymous fuction - a function defined inside the ()
setInterval(function(){
    console.log("I am an anonymous fuction!");
    console.log("THIS IS AWESOME!");
    }, 2000)
