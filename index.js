// alert("hello Lets Play The Dice Game I coded");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".jpg";
var randomImageSource = "./images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".jpg";
var randomImageSource = "./images/" + randomDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🥶Player 1 wins🏆";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="🏆Player 2 wins🥶";
}
 else{
    document.querySelector("h1").innerHTML="🤝Draw🤗";
}
 const refreshButton = document.getElementById("refreshButton");

    refreshButton.addEventListener("click", function() {
        location.reload();
    });

