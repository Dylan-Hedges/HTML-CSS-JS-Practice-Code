//Selects all <div>
$("div").css("background","purple");

//Select highlight class
$("div.highlight").css("width","200px");

//Select third class
$("#third").css("border","2px solid orange");

//Select first <div> only
//You can also use ":first" but this is slightly slower as its a jQuery shortcut and not a native CSS command like ":first-of-type"
$("div:first-of-type").css("color","pink");


