//Define an Array
var dogs = ["Rusty", "Lucky", "Bubba"];
//Add to the end
dogs.push("Wyatt");
//Change value
dogs[1] = "Lucy";

//Query the Array
dogs[1];
dogs;


//Define Object
//cant use . with a numebr e.g object.123 = 6;
var dog = {
    name: "Bubba",
    breed: ":Lab"
}
//Add to Object
dog["age"] = 6;
dog.age = 6;
//Change value
dog.breed = "Black Lab";

//Query the object
dog.name;
dog["name"];

//Objects within an Array
//Commonly seen in things such as Reddit posts
var posts = [
    {
    title: "Cats are mediocre",
    author: "Colt",
    comments: ["Awesome post", "Terrible post"]
    },
    {
    title: "Cats are actually awesome",
    author: "Cat Luvr",
    comments: ["<3", "Go to hell i hate you"]
    }
]

//Get 1st post
posts[0];
//Get title of 1st post
posts[0].title;
//Get 2nd comment of 2nd post
posts[1].comments[1];




//Exercise - get "Malfoy
var someObject = {
    friends: [
    {name: "Malfoy"},
    {name:"Crabbe"},
    {name:"Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

someObject.friends[0].name;






















