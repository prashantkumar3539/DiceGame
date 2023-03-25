function playGame(){
var randomNumber1=Math.floor(Math.random() * 6) + 1; // random number from 1 to 6 

var randomDiceImage1 = "dice" + randomNumber1 + ".png";// 

var randomImageSource1 ="images/"+randomDiceImage1; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);
/*
Image 2 Change Code 
*/

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 ="images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);




if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player1 Wins 😊"
}
else if(randomDiceImage2 > randomDiceImage1){
    document.querySelector("h1").innerHTML="😊 Player2 Wins"
}
else  {
    document.querySelector("h1").innerHTML="Draw 😂"
}
}

playButton.addEventListener("click", playGame);

//Write the code for Connecting function to button



// Get references to the HTML elements we'll be using
// 







// // Get references to the HTML elements we'll be using
// const player1Score = document.querySelectorAll("img")[0];
// const player2Score = document.querySelectorAll("img")[1];
// const winnerDisplay = document.querySelector("h1");
// const playButton = document.getElementById("play-button");

// // Function that rolls the dice and updates the scores
// function playGame() {
//   // Roll the dice for player 1 and update their score
//   const randomNumber1 = Math.floor(Math.random() * 6) + 1;
//   const randomDiceImage1 = "dice" + randomNumber1 + ".png";
//   const randomImageSource1 = "images/" + randomDiceImage1;
//   player1Score.setAttribute("src", randomImageSource1);

//   // Roll the dice for player 2 and update their score
//   const randomNumber2 = Math.floor(Math.random() * 6) + 1;
//   const randomDiceImage2 = "dice" + randomNumber2 + ".png";
//   const randomImageSource2 = "images/" + randomDiceImage2;
//   player2Score.setAttribute("src", randomImageSource2);

//   // Determine the winner and display the result
//   if (randomNumber1 > randomNumber2) {
//     winnerDisplay.innerHTML = "Player 1 Wins 😊";
//   } else if (randomNumber2 > randomNumber1) {
//     winnerDisplay.innerHTML = "😊 Player 2 Wins";
//   } else {
//     winnerDisplay.innerHTML = "Draw 😂";
//   }
// }

// Attach the playGame function to the button's click event
// playButton.addEventListener("click", playGame);
