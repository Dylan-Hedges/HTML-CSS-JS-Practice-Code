//Canvas = HTML element is what animations are run on


<script type="text/paperscript" canvas="myCanvas">
    var keyData = {
        a: {
           color: "purple",
           sound: new Howl({
               src: ['sounds/bubbles.mp3']
            })
        },
        s: {
            color: "green",
            sound: new Howl({
            src: ['sounds/clay.mp3']
            })
       },
        e: {
            color: "yellow",
            sound: new Howl({
            src: ['sounds/confetti.mp3']
            })
       }
    }
    var circles = [];
    
    function onKeyDown(event) {
        if(keyData[event.key]){
            
            //view.size.width takes the width of the screen (responsive)
            //view.size.height takes the height of the screen (responsive)
            //Takes the screens width and height and stores it in a variable
            var maxPoint = new Point(view.size.width, view.size.height);

            //Point.random(); generates a random number between 0 & 1, this is then storred in a variable
            var randomPoint = Point.random();

            //Multiply the screen by a random number & multiply the height by a random number, this creates 2 new x, y coordinates, store in var
            var point = maxPoint * randomPoint;

            //We set the coordinates of circle = "point", set radius = 10 and color = red
            //We define our circles position and size, we cannot add .fillColor="orange" to the end of this as it will pass the string "orange" which does not work with "circles[i].fillColor.hue +=1" used later on
            //Create a new circle at the random "point" with a radius of 500
            var newCircle = new Path.Circle(point, 500);

            //Fill the new circle using the color defined in the keyData object
            newCircle.fillColor = keyData[event.key].color;

            //Play the sound as defined in the keyData object 
            keyData[event.key].sound.play();

            //Push our circle into an Array called circles
            circles.push(newCircle);
            
        }
    }
    
    //Whenever a new frame is called (Paper.js defines)
    function onFrame(event) {
        //Loop through all the circles
        for(var i = 0; i < circles.length; i++){
            //Reduce the size of circle by 10% per frame
            circles[i].scale(0.9);
            //+1 to the hue of the circle color
            circles[i].fillColor.hue += 1;
            //Deletes circles from the screen and the array (currently just hides on screen but circle remains in the Array, this can be an issue as the Array gets larger)
            //.area checks the surface area of the circles in px
            if(circles[i].area < 1){
                //circles[i].remove(); circle is removed from screen
                circles[i].remove();
                //circles.splice(i, 1); circle is removed from the array
                circles.splice(i, 1);
                //i--; is decremented so the loop doesn't skip a circle now that it's been shifted as a result of the .splice() function. 
                i--;
                console.log(circles);
            }
        }
    }
    </script>




//--------------------LEFTOVER CODE--------------------
//    <!--NOTE: type="text/paperscript" and  canvas="myCanvas" -->
//    <script type="text/paperscript" canvas="myCanvas">
//        //Start x coordinate at position 0, until x reaches 900, add 100 and store in variable x
//        for (var x = 0; x <1000; x+= 100){
//            //Start y coordinate at 0, until y reaches 900, add 100 and store in variable y
//            //For every x you generate x10 y's, this resets to 0 when x moves down
//            for (var y = 0; y <1000; y+= 100){
//                //Create a circle at the position x, y with a radius of 10, color it red, no need to save in variable 
//                new Path.Circle(new Point(x, y), 10).fillColor = 'red';
//            }
//        }
//    </script>



//    //Created a circle at x:100, y:100 with a radius of 100
//    var animatedCircle = new Path.Circle(new Point(300,300), 100);
//    
//    //Apply .fillColor method to circle variable and turn red
//    animatedCircle.fillColor = "red";