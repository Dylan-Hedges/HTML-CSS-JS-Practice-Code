//This exercise is built on the While loops exercise
//All excercises can be done by removing the "var num1" etc and defining them directly in the for loop as "i" followed by e.g "i <= 19;" and "console.log(i);"

console.log("PRINTING ALL NUMBERS BETWEEN -10 and 19")
var num1 = -10;
//var i = 19; we set the number we want to get to
//i >= num1; while this number is >= our original number
//num1++; increment by 1 and print the number to screen
for (var i = 19; i >= num1; num1++){
    console.log(num1);
}



console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 and 40")
var num2 = 10;
for(var i = 40; i >= num2; num2++){
//(num2 % 2 === 0) in additon to the above we check if it is divisible by 2
    if (num2 % 2 === 0){
        //console.log(num2); only numbers divisible by 2 are printed to screen
        console.log(num2);
    }
}


console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 and 333")
var num3 = 300;
for (var i = 333; i >= num3; num3++){
    if(num3 % 2 !== 0){
        console.log(num3);
    }
}


console.log("PRINTING ALL DIVISIBLE BY 5 & 3 between 5 & 50")
var num4 = 5;
for (var i = 50; i >= num4; num4++){
    if(num4 % 5 === 0 && num4 % 3 === 0){
            console.log(num4);
        }
}

