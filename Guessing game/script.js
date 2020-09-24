
let correctNumber = getRandomNumber(); //generating a random number
let guesses = [];

window.onload = function() { // function playgame and initgame
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    
  
}

function playGame(){
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess){
  if(numberGuess > correctNumber)
  {
    showNumberAbove();
  }
  else if(numberGuess < correctNumber){
    showNumberBelow();
  }
  else
  {
    showYouWon();
  }
}

//resets the correct number, results, guesses array and the view to restart the game
function initGame(){
  correctNumber=getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses=[];
  displayHistory();

}
//reset the HTML content for guess history
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}
//returns the random number between 1 and 100
function getRandomNumber(){
let wholeNumber = Math.floor(Math.random()*100)+1;
return wholeNumber;
}

//Save the guess history in an array
function saveGuessHistory(guess) {
 guesses.push(guess);
 console.log(guesses);
}

//get the values from the guess history
function displayHistory() {
  let index = guesses.length-1;
  let list = "<ul class='list-group'>";
  while(index >=0){
    list += "<li class='list-group-item'>" +
    "You guessed " + guesses[index] + "</li>";
    index-=1;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}

//Retrive the dialog
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>" //append the text to the div
  return dialog;
}
//Functions that shows number is greater or smaller
function showYouWon(){
  const text = "Awesome, YOU GOT IT !"
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
 let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
