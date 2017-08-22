//Obejcts, Arrays, forEach loop


var movies = [
    {
    titleName: "In Bruges",
    rating: 5,
    hasWatched: true
    },
    {
    titleName: "Frozen",
    rating: 4.5,
    hasWatched: false
    },
    {
    titleName: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
    },
    {
    titleName: "Les Miserables",
    rating: 3.5,
    hasWatched: false
    }
]

//My Solution
movies.forEach(function(movie){
        if (movie.hasWatched == true){
            console.log("You have watched " + movie.titleName + " " + movie.rating + " stars")
        }
        else{
            console.log("You have not watched " + movie.titleName + " " + movie.rating + " stars")
        }
    });


//Udemy solution
//Stores start of sentence in a variable, uses an if statement to determine if it has been watched or not then adds to string, continues to build string
//movies.forEach(function(movie){
//    var result = "You have ";
//    if (movie.hasWatched){
//        result += "watched ";
//    }else{
//        result += "not watched ";
//    }
//    result += "\"" + movie.titleName + "\" - ";
//    result += movie.rating + " stars";
//    console.log(result);
//});

//Udemy solution 2
//Take the logic from solution 1, store in a function, call in a forEach loop
//function buildString(movie){
//        var result = "You have ";
//    if (movie.hasWatched){
//        result += "watched ";
//    }else{
//        result += "not watched ";
//    }
//    result += "\"" + movie.titleName + "\" - ";
//    result += movie.rating + " stars";
//    return result;
//}
//
//movies.forEach(function(movie){
//    console.log(buildString(movie));
//});
