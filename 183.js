
//--------fadeIn() & fadeOut()--------
//Select button, on click, for all div's, fade out (hide) over 1 second
//JS does not wait for the fade out to finish before executing console.log()
//The console.log() needs to be inside a nested function to execute after the fade has completed
//$(this).remove() - remove the element, not hide it after 1000 miliseconds
$("button").on("click", function(){
//    $('div').fadeIn(1000, function(){
    $('div').fadeOut(1000, function(){
        $(this).remove();
    });
});

//--------fadeToggle()--------
//Turns fade on and off like CSS toggle
$("button").on("click", function(){
    $('div').fadeToggle(500);
});

//--------slideToggle()--------
//Slides the <div> in and out, the optional nested function prints x3 console.log() 1 for each
//$(this).remove(); typically we remove elements after slide is finished
$("button").on("click", function(){
    $('div').slideToggle(1000, function(){
        $(this).remove();
    });
});

