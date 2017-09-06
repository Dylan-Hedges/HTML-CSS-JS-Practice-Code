//----------------Key jQuery Events - Click, Keypress, On--------------------------

//--------------------------------click()------------------------------------------------
//Listeners can be applied to an individual element e.g a "h1"
$("h1").click(function(){
    alert("h1 clicked");
});

//Or a collection of elements e.g x3 "button"
//In vanilla JS you would need to write:
//1. querySelectorAll("button")
//2. Loop through all using a for loop
//3. Apply .addEventListener to each button
$("button").click(function(){
    alert("button clicked");
});

//In vanilla JS we would just use "this" (refering to the button in this case)
//With jQuery we cant use the .css() jQuery method unless its on a jQuery object, in this case we need to use the jQuery version/wrapper "$(this)" instead of just "this"
$("button").click(function(){
    $(this).css("background","pink");
});

//Display button text on screen using jQuery methods
//$(this) selects the button, .text() retrives the text to be storred in the variable
$("button").click(function(){
    var text = $(this).text();
    console.log("You clicked " + text);
});

//-----------------------------------keypress()---------------------------------------------
//Events that a triggered when a user presses a key
//.keydown() executed when a key is pressed down
//.keyup() executed when a key is released
//.keypress() executed when a character is selected e.g captial A (shift + a)

//$("input") selects the input field
//.keypress() every time a key is pressed display message in console
$("input").keypress(function(){
    console.log("You pressed a key");
});

//"which" refers to the JS code for the key you pressed, 13 = enter key
//Take what is press "event", use ".which" to find out the pressed key's character code
//Compare it to 13 (code for enter), if matching display alert "you hit enter"
$("input").keypress(function(event){
    if (event.which === 13){
        alert("You hit enter");
    }
});



//-----------------------------------on()------------------------------------------------
//similar to vanilla JS ".addEventListener()
//Give on() the name of the event e.g 'click' 'dbclk' 'keypress

//On "click" change the color of the h1 element "$(this)" to purple
$("h1").on("click", function(){
    $(this).css("color", "purple");
});

//On "click" change all h1 elements to purple
$("h1").on("click", function(){
    $("h1").css("color", "purple");
});

//"keypress" console.log() when pressing a key in the text field
$("input").on("keypress", function(){
   console.log("Key pressed!");
});

//On "mouseenter" bold the text of the button you hover over "$(this)"
$("button").on("mouseenter", function(){
   $(this).css("font-weight","bold");
});
//Reverse the above
$("button").on("mouseenter", function(){
   $(this).css("font-weight","normal");
});

//-------Differences--------
//click() - only add click listeners for elements on the page at that time
//on('click') - add click listeners for all futurue/potential elements
