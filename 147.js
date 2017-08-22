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
