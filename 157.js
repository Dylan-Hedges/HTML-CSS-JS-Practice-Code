//We want to select all the <li> in our HTML
var lis = document.querySelectorAll("li");

//for(var i=0; i < lis.length; i++){} will loop through all the <li> aka for the entire length  (length = 3) of the variable "lis", this stores all the <li> in an array
//lis[i]. this will select the individual <li>
//"mouseover" will execute the function when hovering over <li>
//this.classList.add("selected"); makes the text green
//"mouseout" will execute the function when hovering over an <li>
//this.style.color = "black"; can also make text black manually (not best practice)
//this.classList.toggle("done"); will put a strike-through and grey out the <li> when clicked (defined in the css), this can be turned on and off by clicking (due to .toggle)

for(var i=0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
    this.classList.add("selected");
    });

    lis[i].addEventListener("mouseout", function(){
    this.style.color = "black";
    });

    lis[i].addEventListener("click", function(){
    this.classList.toggle("done");
    });
}

