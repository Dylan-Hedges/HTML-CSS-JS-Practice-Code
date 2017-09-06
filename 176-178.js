//------------------------------.text()--------------------------------
//.text() returns all of the text for your chosen element
$("h1").text();
$("ul").text();
$("li").text();

//.text("New Text!) will change the text for that element
$("h1").text("New Text!");
//("li").text it will automatically loop through elements and change each (in just vanilla Javascript we would need to create a for loop and change the text for each element)
$("li").text("More Text!");


//--------------------------.html()----------------------------------------
//.html() like "innerHTML" it retrives the HTML for that element
$("ul").html();

//You can also change the HTML for that element
$("ul").html("<li>I hacked your UL!</li><li>I hacked you again!</li>");
$("li").html("<a href='google.com'>I hacked your UL!</a>");


//----------------------------.css("width")-----------------------------------
//Display width of image
$('img').css("width");
//Change width of image
$('img').css("width", "200px");

//--------------------.attr() attribute method----------------------------------
//SET/GET the value of an attribute
//1 argument e.g .attr("src"); = GET (returns image source)
//2 arguments e.g .attr("src","http://google.com"); = SET (changes image source)

//Display (GET) source of the image
$('img').attr("src");
//Change (SET) the source of the image
$('img').attr("src", "http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_SiliconValley_Hero_20140708_Google_19%20copy-1280x642_0.jpg");

//Can also be applied to input fields
$("input");
$("input").attr("type","checkbox");
$("input").attr("type","color");
$("input").attr("type","text");

//---Examples---
//Selects all images
$('img').css("width", "200px");
//Changes the source of the first image
$("img:first-of-type").attr("src", "http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_SiliconValley_Hero_20140708_Google_19%20copy-1280x642_0.jpg");
//Changes the source of the last image
$("img").last().attr("src", "http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_SiliconValley_Hero_20140708_Google_19%20copy-1280x642_0.jpg");


//---------------------------------------.val()----------------------------------
//SET/GET the value of an input

//Displays the text inside the field
$("input").val();
//Displays what has been selected in a drop down
$("select").val();

//Changes value of input field
$("input").val("Rusty");
//Often used to reset text input fields
$("input").val("");



//---------------------------------------CSS classes----------------------------------
$('h1').addClass("correct");
$('h1').removeClass("correct");

//If we did this without jQuery we would have to:
//1. Do querySelectorAll("li")
//2. Loop through each one with a for loop
//3. Apply classlist.add("wrong") to each
$("li").addClass("wrong");
$("li").removeClass("wrong");
//cant see .addClass("correct"); until .removeClass("wrong"); it has been applied however
$("li").addClass("correct");

//.toggleClass() turns a class on and off
$("li").toggleClass("done");
//toggles the first element on and off
$("li").first().toggleClass("done");











