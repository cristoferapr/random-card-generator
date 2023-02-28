/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomSymb(n) {
  return Math.floor(Math.random() * n) + 1;
}

window.onload = function() {
  //write your code here
  let symbol = getRandomSymb(4);
  let number = getRandomSymb(13);
  var myDiv = document.getElementById("pinta");
  var numDiv = document.getElementById("number");
  var bottomDiv = document.getElementById("pinta-down");

  if (symbol == 1) {
    myDiv.innerHTML = "♦";
    myDiv.style.color = "red";
    bottomDiv.innerHTML = "♦";
    bottomDiv.style.color = "red";
  } else if (symbol == 2) {
    myDiv.innerHTML = "♥";
    myDiv.style.color = "red";
    bottomDiv.innerHTML = "♥";
    bottomDiv.style.color = "red";
  } else if (symbol == 3) {
    myDiv.innerHTML = "♣";
    bottomDiv.innerHTML = "♣";
  } else {
    myDiv.innerHTML = "♠";
    bottomDiv.innerHTML = "♠";
  }

  if (number == 1) {
    numDiv.innerHTML = "A";
  } else if (number == 11) {
    numDiv.innerHTML = "J";
  } else if (number == 12) {
    numDiv.innerHTML = "Q";
  } else if (number == 13) {
    numDiv.innerHTML = "K";
  } else {
    numDiv.innerHTML = number;
  }

  console.log("Hello Rigo from the console!");
};
