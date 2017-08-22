//ALL tags are storred as JS OBJECTS that contain HTML (returned as a Node List, this is not as advanced as an Array list)
//All methods are inside the document object

//getElementById
var tag = document.getElementById("highlight");
//console.log(tag);
//console.dir(tag);

var tags = document.getElementsByClassName("bolded");
//console.log(tags);
//console.log(tags[0]);
//console.log(tags.length);
//Node lists cant do forEach loop, not as advanced as an Array
//console.log(tags.forEach);
//console.dir(tags);

var tags = document.getElementsByTagName("li");
//console.log(tags);


//querySelector
//Newer method, use CSS style syntax (only returns first match)
//Select the 1st h1
var tag = document.querySelector("h1");
//Select id
var tag = document.querySelector("#highlight");
//Select class
var tag = document.querySelector(".bolded");
//Can get very specific
var tag = document.querySelector("li a.special");

//querySelectorAll
//Same as querySelector but returns ALL matches
var tags = document.querySelectorAll("h1");
var tag = document.querySelectorAll("#highlight");
var tags = document.querySelectorAll(".bolded");

