var list = [];


while (answer !== "quit"){
    var answer = prompt("What would you like to do?")

    if (answer === "new"){
        newToDo();
        }

    else if (answer === "list"){
        listToDo();
    }
    else if (answer === "delete"){
        deleteToDo();
    }
}

console.log("You quit the app");


function newToDo (){
    list.push(prompt("List the activity"));
}

function listToDo(){
    list.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
}

function deleteToDo(){
    var indexToDelete = prompt("Which index do you want to delete?");
    list.splice(indexToDelete, 1);
}










//list.push(); - adds an item at the end of the array
//list.pop(); - removes an item at the end of the array
//list.unshift(); - adds an item to the start of the array
//list.shift(); - removes an item at the start of the array

//list.push(prompt("List the activity"));
//Long way - create a new variable addToList then reference that variable
//var addToList = prompt("List the activity");
//list.push(addToList);


//console.log(list);
//the console needs to be open before the web page is loaded for console.log(list); to work

