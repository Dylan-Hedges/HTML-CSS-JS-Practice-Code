//Using "this" keyword

//1. Define object (empty)
var comments = {};

//2. Add data (an Array of comments) to the object
comments.data = ["Good Job", "Bye", "Lame..."];

//3. Add method to the object
//using the "this" keyword inside of the method refers to the object "comments" and the Array of data, "this.data" = "comments.data"
comments.print = function(){
    //this refers to the parent object "comments"
    this.data.forEach(function(el){
        console.log(el);
    });
}

//4. Call the method inside the object
comments.print()



//Without using "this" keyword

////Define the function to loop through the object and print on screen
//function print(arr){
//    arr.forEach(function(el){
//    console.log(el);
//    });
//}
//
////Run the print function and specify the comment.data object.array
//print(comments.data);
