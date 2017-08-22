var secretNumber = 7;

var gussedNumber = Number(prompt("Guess a number"));

if (gussedNumber === secretNumber){
    alert("You guessed correctly");
}

else if (gussedNumber < secretNumber) {
    alert("Too low");
}

else {
    alert("Too high");
}



