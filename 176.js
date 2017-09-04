//--------.text()--------
//.text() returns all of the text for your chosen element
$("h1").text();
$("ul").text();
$("li").text();

//.text("New Text!) will change the text for that element
$("h1").text("New Text!");
//("li").text it will automatically loop through elements and change each (in just vanilla Javascript we would need to create a for loop and change the text for each element)
$("li").text("More Text!");


//--------.html()--------
//.html() like "innerHTML" it retrives the HTML for that element
$("ul").html();

//You can also change the HTML for that element
$("ul").html("<li>I hacked your UL!</li><li>I hacked you again!</li>");
$("li").html("<a href='google.com'>I hacked your UL!</a>");
