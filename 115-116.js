//Return even numbers - shorten version (we dont need to specify if its true/false)
function isEven(num){
    return num % 2 === 0;
}


//function isEven(num){
//    if (num % 2 === 0){
//        return true;
//    }
//    else{
//        return false;
//    }
//}

//Return factorial of x number
function factorial(num) {
  if (num === 0) {
    return 1;
  }
    return num * factorial(num - 1);
}

//Replaces "-" with "_" in a string
function kebabToSnake(word){
    word = word.replace(/-/g, "_");
    return word;
}
