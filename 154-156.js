//Selects the buttons
var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input[type='number']");

//Selects the values on screen
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
//("p span") selects the span inside of the p
var winningScoreDisplay = document.querySelector("p span");

//Sets the initalvalues
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//Adds to the score when the button is clicked
//"if (!gameOver){}" if the game is not over
//"p1Score++;" we add 1 to the score for player 1
//"if (p1Score === winningScore){}" we check to see if player 1 has won
//p1Display.classList.add("winner"); we make the number green using the CSS class winner
//"gameOver = true;" we then set game over = true so the first if statement cannot run again, additonal scores will not be incremenented and the game cannot be played
// "p1Display.textContent = p1Score;" displays player ones score on screen
p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if (winningScore === p2Score){
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
        p2Display.textContent = p2Score;
});

//function reset() will reset all values and variables so the players can play again
//p1Score = 0; resets the variables containing the players scores
//p1Display.textContent = 0; resets the values on screen
//p1Display.classList.remove("winner"); removes the CSS class (turns on screen numbers green)
//gameOver = false; allows if statements on the buttons to executed and players can play
function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};

//Calls the reset function on the reset button so players can play again
resetButton.addEventListener("click", function(){
    reset();
});


//Changes the winning score based on the value in the field
//"change" is a type of event that runs the function any time a value has changed
//"click" will work if the user clicks but not if they type a value
//".value" takes the value of numInput and stores it as a string
//"Number(.numInput.value);" converts the string value from numInput to a number, we cant compare if(winningScore === p1Score) otherwise as they are different types string === integer
//"numInput" can be replaced with "this"
//"reset();" we run the reset function as we want to reset the current scores and the values displayed on screen if the winning score is changed halfway through a game
numInput.addEventListener("click", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});
