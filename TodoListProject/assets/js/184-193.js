//------------------------Cross off an item on the list------------------------
//Strikethrough and grey <li>
//When an <li> is clicked inside of a <ul>, run this code, applies to future <li>'s
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


//------------------------Delete an item on the list------------------------
//Delete <li> when selecting X (<span>)
$("ul").on("click", "span", function(e){
    //$(this).parent().fadeOut() fade out the parent of <span>, which is <li> over 500ms
    $(this).parent().fadeOut(500, function(){
        //$(this).remove(); note $(this) now refers to the <li> not <span>
       $(this).remove();
    });
    //.stopPropagation(); prevents low level element triggering the functions for all of its parents, in this case <li> + <ul> + <div> + <body> (this prevents an event bubble)
    e.stopPropagation();
});

//------------------------Add an item to the list------------------------
$("input[type='text']").keypress(function(event){
    //When the user hits enter
    if(event.which === 13){
        //Take the value ".val()" of what is entered "$(this)" and save into var todoText
        var todoText = $(this).val();
        //Reset what is displayed in the text fiel,d
        $(this).val("");
        //Select the ul and add another <li> containing the value of todoText + the <span>X<span> that is used to delete items
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

//------------------------Fade text input field ------------------------
//When we click the .fa-plus icon, we want the text field to fade in and out (using toggle)
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});




//-------------------------------------LONG METHODS--------------------------------
//Strikethrough and grey <li> (Using CSS)
//When an <li> is clicked, run this code, only applies to <li> on page load
//$("li").on("click", function(){
//    $(this).toggleClass("completed");
//});


//Strikethrough and grey <li> (Manually changing CSS
//$("li").on("click", function(){
//    //Using "grey" will not work, has to be the rgb version rgb(128, 128, 128)
//    //If the color is grey
//    if($(this).css("color") === "rgb(128, 128, 128)"){
//        //Turn it black and remove strikethrough
//        $(this).css({
//            color: "black",
//            textDecoration: "none"
//        });
//    } else {
//        //else apply the grey + strikethorugh style
//        $(this).css({
//            color: "grey",
//            //textDecoration have to use camel case as JS does not allow text-decoration
//            textDecoration: "line-through"
//        });
//    }
//});
