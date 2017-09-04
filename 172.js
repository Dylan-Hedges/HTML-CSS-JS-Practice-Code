//$ is the only selector you will use (replaces document.querySelectorAll, getElementbyId etc.)
//jQuery selector will always return a list/Array even if there is just 1 item
$('h1')[0];
$('li')[0];
$('a')[0];
$('li a')[0];
$('ul li a')[0];
$('#adorable')[0];

//--------------jQuery vs JS--------------------

//Change color using jQuery
$('h1').css("color","yellow");
//Change font size using jQuery
$('a').css("font-size","40px");
//Change color using just JS
document.querySelector("h1").style.color = "orange";


//--------------jQuery vs JS for loop--------------------
//Using jQuery
//You can select and change multiple elements with one line, no loop required, jQuery will apply css to every element in the list/Array
$('li').css("color","blue");

//Using just JS
//1. Select all <li> and store in a variable/Array
var lis = document.querySelectorAll("li");
//2. For loop through the Array and change each <li> to green
for(var i=0; i < lis.length; i++){
    lis[i].style.color="green";
}



//--------------jQuery and objects--------------------
//Method 1. Object defined outside
//create a "styles" object
var styles = {
    fontSize: "40px",
    color:"red",
    background: "rgba(89,45,20,0.5)",
    border: "2px solid purple"
}
//Apply object to the element
$('li').css(styles);

//Method 2. Object defined inside
$('li').css({
    fontSize: "40px",
    color:"red",
    background: "rgba(89,45,20,0.5)",
    border: "2px solid purple"
});





