var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    //Remove highlight from hard button
    hardBtn.classList.remove("selected");
    //Add highlight to easy button
    easyBtn.classList.add("selected");
    numSquares = 3;
    //Pick 3 new random colors
    colors = generateRandomColors(numSquares);
    //Pick a new correct color from those colors
    pickedColor = pickColor();
    //Change the display text to the correct color
    colorDisplay.textContent = pickedColor;
    //Hides the bottom 3 squares
    for (var i = 0; i < squares.length; i++){
        //For the first 3 squares
       if(colors[i]){
        //Set the color of the first 3 squares to the rgb code in the Array
           squares[i].style.backgroundColor = colors[i];
       }else{
        //For the remaining  3 colors set the colors to none
            squares[i].style.display = "none";
       }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        //Set the color of all squares to the rgb codes in the Array
        squares[i].style.backgroundColor = colors[i];
        //Make the last 3 colors in the Array visible
        squares[i].style.display = "block";
       }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change color display text to match picked color
    colorDisplay.textContent = pickedColor;
    //After clicking "PLAY AGAIN?" display the text "New Colors"
    this.textContent = "New Colors";
    //Removes the "Correct/Try Again" when clicking reset
    messageDisplay.textContent = "";
    //change colors of squares on page
    for(var i=0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    //changes h1 background to default when clicking reset
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

//Inital set up, click functionality, corection checking
for(var i=0; i < squares.length; i++){
    //Add inital colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add click functionality to squares
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //Checks if user has won the game
        //Both colors must have spaces in their rgb codes to work
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            //Calls the function changeColors - changes all colors to correct color
            changeColors(clickedColor);
            //Change background of h1 to match the correct color
            h1.style.backgroundColor = clickedColor;
        }else{
            //Makes the squares vanished when clicked
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}

//Changes all squares colors when correct
function changeColors(color){
    //Loop through all squares
    for(var i=0; i < squares.length; i++){
        //Change each color to match the correct color when clicked
        squares[i].style.background = color;
    }
}

//Randomises which color is the correct color
function pickColor(){
    //Math.random() - generates a random number from 0-1 (not including 1)
    // * colors.length - makes the random number no larger than are colors array
    //Math.floor() - rounds decimal numbers to nearest int
    //var random = - store the random number in a variable
    //return colors[random]; - pass the random number out of the function
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Adds the random RGB codes to colors
function generateRandomColors(num){
    //Make an Array for the colors
    var arr = [];
    //Repeat "num" times
    for (var i=0; i < num; i++){
        //Get random color from randomColor() function and add to end of the array
        arr.push(randomColor());
    }
    //Return the colors
    return arr;
}

//Creates random RGB codes
function randomColor(){
    //* 256 - we use 256 because Math.floor rounds down, otherwise we cant reach 255
    //pick a "red" from 0-255
    var r  = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g  = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b  = Math.floor(Math.random() * 256);
    //return the rgb value for the random color as a string
    //spaces are required after the "," otherwise it will not match when checking if correct
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

