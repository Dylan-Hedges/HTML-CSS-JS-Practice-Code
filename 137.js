//Method is a function that is a property inside an object
//Prevents name collision, duplicate names can be used as they are inside an object
//e.g console.log(), user.delete(), comment.delete() etc.




//Declare function inside the object
var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y;
    }
}

obj.add(10,5);


//Declare function outside the object and assign after
var dogSpace = {};
dogSpace.speak = function(){
    return "WOOF!";
}

var catSpace = {};
catSpace.speak = function(){
    return "MEOW!";
}

dogSpace.speak();
catSpace.speak();


