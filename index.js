var randomNumber1 = Math.floor(Math.random()*6) + 1 ;

var diceimage = "dice" + randomNumber1 + ".png" ;

var imageSource = "images/" + diceimage ;

var image1 = document.querySelectorAll("img")[0] ;

image1.setAttribute("src", imageSource);

// for image 2
var randomNumber2 = Math.floor(Math.random()*6) + 1 ;

var diceimage2 = "dice" + randomNumber2 + ".png" ;

var imageSource2 = "images/" + diceimage2 ;

var image2 = document.querySelectorAll("img")[1] ;

image2.setAttribute("src", imageSource2);

// if 1st wins
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML="Draw";
}