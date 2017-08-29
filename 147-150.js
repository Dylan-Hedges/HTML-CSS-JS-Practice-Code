//--------Applying Styling and CSS--------

//Method 1
//1. Create class in CSS
.some-class{
    color: blue;
    border: 10px solid red;
}

//2. Select the element
var tag = document.getElementById("highlight");

//3.Apply the CSS class with JS
tag.classList.add("some-class");
tag.classList.remove("some-class");
//.toggle, if it has a class applied it will remove it and vice versa
tag.classList.toggle("some-class");


//Method 2
//Select element
var tag = document.getElementById("highlight");
//Manually apply styling changes
//We dont want to do this as define the look and feel should be done in CSS
tag.style.color = "blue";
tag.style.border = "10px solid ted";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";


//----------Replacing Text----------

//Take all <p> and store in variable tag
var tag = document.querySelector("p");
//Returns all sentences inside <p>, text only, no <b>, <i> etc.
tag.textContent;
//Replace content of <p> with "blah blah blah", removes all html tags
tag.textContent ="blah blah blah";

//Select the first p element (either method is valid)
var p = document.querySelector("p");
var p = document.getElementsByTagName("p")[0];
//p.textcontent; displays text only
p.textContent;
//p.innerHTML; displays text and html tags
p.innerHTML;
//like textcontent this will still remove all html tags, <b>, <i> etc.
p.innerHTML = "blah blah blah";
//with innerHTML you can insert html tags, you cant do this with textContent
p.innerHTML = "<h1>blah blah blah</h1>";

//Replace text without assigning a variable
document.querySelector("h1").textContent = "END OF LESSON";

//Displays all html for body
document.body.innerHTML;
//Displays all text for body
document.body.textContent;


//----------Replacing <img> and <a>----------
//e.g for an image gallery/slider we have just one image and we change the <a href="www.google.com">
//if you dont have http:// it will think the path is local and will try to add it onto the end of the files path

//Select image
var img1 = document.getElementsByTagName("img")[0];
//Displays link of image
img1;
img1.getAttribute("src");
//Changes the image by changing the image source
img1.setAttribute("src", "https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/19928D1E-8F77-493A-82E10B1FEED9E6EB/thul-e8c6bbdb-c52e-5cf5-93f2-f7e3fe8e14a6.jpg?response-content-disposition=inline");

//Select a link
var a = document.querySelector("a");
//Displays the link
a;
//Changes the link/href value
a.setAttribute("href", "http://www.bing.com");
//Change the text
a.textContent = "LINK TO BING.COM";






