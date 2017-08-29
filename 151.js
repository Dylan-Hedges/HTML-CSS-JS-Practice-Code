//Select the Google logo
var logo = document.querySelector("#hplogo");

//Change logo image
//Had to use srcset instead of src, still didnt work on google.com
logo.setAttribute("srcset", "http://cdn3-www.dogtime.com/assets/uploads/gallery/goldador-dog-breed-pictures/puppy-1.jpg");

//Change logo width, height and add a border
logo.style.width = "200px";
logo.style.height = "100px";
logo.style.border = "2px solid purple";

//Get all links on the page
var links = document.getElementsByTagName("a");
//Display all the links
a;


//Change all links on the page using for loop
for (var i=0; i < links.length; i++){
    console.log(links[i].textContent);
    links[i].style.background ="pink";
    links[i].style.border = "1px dashed purple";
    links[i].style.color ="orange";
    console.log(links[i].getAttribute("href"));
    links[i].setAttribute("href", "http://www.bing.com");
}


//links.setAttribute(); - we cannot do this as it has to be an individual element, links has a collection of nodes
//cant use forEach as its not a real Array (see previous notes)
//var i=0; starting point
//i < links.length; until the last link
//i++ add one each time/proceed to the next element/link
//links[i] access the individual element/link per loop
//console.log(links[i].textContent); prints out the text for every link
//links[i].style.background ="pink"; changes the background for every link
//links[i].style.border = "1px dashed purple"; adds a border for every link
//links[i].style.color ="orange"; changes text color for every link
//console.log(links[i].getAttribute("href")); gets all links on page
//links[i].setAttribute("href", "http://www.bing.com"); changes all links on page
