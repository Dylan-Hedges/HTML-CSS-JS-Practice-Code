var answer = prompt("Are we there yet?")


//Method 1 - While loop, end loop if yes is entered

//while (answer != "yes"){
//    var answer = prompt("Are we there yet?");
//}
//
//alert ("Woohoo");

//ADDITONAL - end loop if "yes" is anywhere in the answer

//answer.indexOf("yes") checks the answer for "yes" and returns the index value e.g 0,1,2,3 of where that word starts, if it cannot find "yes" in the answer it will return an index value of -1, if this is returned we know the answer does not contain the word yes so we will ask again
while (answer.indexOf("yes") === -1){
    var answer = prompt("Are we there yet?");
}

alert ("Woohoo");


//Method 2 - Do While loop, end loop if yes is entered
//do {
//    answer = prompt("Are we there yet?");
//}
//
//while (answer !== "yes");
//
//alert("Woohoo");

