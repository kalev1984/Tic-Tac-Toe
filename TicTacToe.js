/**
 * Created by Kalev on 3/5/2017.
 */
var squares = document.getElementsByClassName("square");

for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
        squares[i].style.backgroundImage = "url('x.png')";
        squares[i].style.backgroundSize = "cover";
        squares[i].style.backgroundPosition = "center center";
    });
}


