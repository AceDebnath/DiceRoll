//for image 1
var randemNumber = Math.floor((Math.random()*6)+1);

var randomImg = "Dice" + randemNumber +".png";

var randomImgSrc = "Images/" + randomImg;

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);

// for image 2

var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomImgScr2 ="Images/Dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgScr2);

if(randemNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(randomNumber2>randemNumber){
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else if(randomNumber2==randemNumber){
    document.querySelector("h1").innerHTML = "draw";
}

document.getElementById('reset').onclick = function(){
    location.reload();
}