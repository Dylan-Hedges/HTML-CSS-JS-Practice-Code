//Variables
var numSquares = 6;
var colors = [];
var pickedColor;
//Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//Run the init function when the page loads
init();

//The init function consists of smaller functions (it is considered anything longer than 10 lines should be in a seperate function)
function init(){
    //Defines buttons e.g Hard, Easy etc.
	setupModeButtons();
    //Defines squares
	setupSquares();
    //Resets the squares and RGB title (ran on page launch)
	reset();
}

//Button set functionality
function setupModeButtons(){
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //Ternary operator ? (has 3 parts, quicker than short if statement)
            //this.textContent === "Easy" - If this.textContent is = "Easy"
            //? numSquares = 3: - Then numsquares = 3
            //numSquares = 6; - Otherwise numSquares = 6;
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

//Squares functionality
function setupSquares(){
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
}

//Resets square colors and RGB code in title
function reset(){
     //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change color display text to match picked color
    colorDisplay.textContent = pickedColor;
    //After clicking "PLAY AGAIN?" display the text "New Colors"
    resetButton.textContent = "New Colors";
    //Removes the "Correct/Try Again" when clicking reset
    messageDisplay.textContent = "";
    //change colors of squares on page
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    //changes h1 background to default when clicking reset
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})


//Changes all squares to correct color
function changeColors(color){
    //Loop through all squares
    for(var i=0; i < squares.length; i++){
        //Change each color to match the correct color when clicked
        squares[i].style.background = color;
    }
}

//Chooses the correct color
function pickColor(){
    //Math.random() - generates a random number from 0-1 (not including 1)
    // * colors.length - makes the random number no larger than are colors array
    //Math.floor() - rounds decimal numbers to nearest int
    //var random = - store the random number in a variable
    //return colors[random]; - pass the random number out of the function
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Adds RGB codes to an Array
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

//Creates RGB codes
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


//-------------CODE THAT HAS BEEN REPLACED BY SHORTER VERSIONS-------------
//easyBtn and hardBtn are now in the inital for loop as mode buttons
//resetBtn now calls the reset functionality in a seperate function

//easyBtn.addEventListener("click", function(){
//    //Remove highlight from hard button
//    hardBtn.classList.remove("selected");
//    //Add highlight to easy button
//    easyBtn.classList.add("selected");
//    numSquares = 3;
//    //Pick 3 new random colors
//    colors = generateRandomColors(numSquares);
//    //Pick a new correct color from those colors
//    pickedColor = pickColor();
//    //Change the display text to the correct color
//    colorDisplay.textContent = pickedColor;
//    //Hides the bottom 3 squares
//    for (var i = 0; i < squares.length; i++){
//        //For the first 3 squares
//       if(colors[i]){
//        //Set the color of the first 3 squares to the rgb code in the Array
//           squares[i].style.backgroundColor = colors[i];
//       }else{
//        //For the remaining  3 colors set the colors to none
//            squares[i].style.display = "none";
//       }
//    }
//});
//
//hardBtn.addEventListener("click", function(){
//    easyBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squares.length; i++){
//        //Set the color of all squares to the rgb codes in the Array
//        squares[i].style.backgroundColor = colors[i];
//        //Make the last 3 colors in the Array visible
//        squares[i].style.display = "block";
//       }
//});

//resetButton.addEventListener("click", function(){
//    //generate all new colors
//    colors = generateRandomColors(numSquares);
//    //pick a new random color
//    pickedColor = pickColor();
//    //change color display text to match picked color
//    colorDisplay.textContent = pickedColor;
//    //After clicking "PLAY AGAIN?" display the text "New Colors"
//    this.textContent = "New Colors";
//    //Removes the "Correct/Try Again" when clicking reset
//    messageDisplay.textContent = "";
//    //change colors of squares on page
//    for(var i=0; i < squares.length; i++){
//        squares[i].style.background = colors[i];
//    }
//    //changes h1 background to default when clicking reset
//    h1.style.background = "steelblue";
//})
