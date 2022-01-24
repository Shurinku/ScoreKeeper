const game = document.getElementById("game");
const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");

const winningMessage = document.getElementById("winningMessage");

const p1Button = document.getElementById("p1Button");
const p2Button = document.getElementById("p2Button");

const playTo = document.querySelector("#playto");
const reset = document.getElementById("reset");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

playTo.addEventListener("change", function () {
  winningScore = parseInt(this.value);
});

// Logic for the game
p1Button.addEventListener("click", function () {
  if (++p1Score == winningScore) {
    game.hidden = true;

    winningMessage.hidden = false;
    winningMessage.textContent = "Player 1 won!";
  }

  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function () {
  if (++p2Score == winningScore) {
    game.hidden = true;

    winningMessage.hidden = false;
    winningMessage.textContent = "Player 2 won!";
  }

  p2Display.textContent = p2Score;
});

// Reset functionality
reset.addEventListener("click", function () {
  game.hidden = false;
  winningMessage.hidden = true;

  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;

  winningMessage.textContent = '';
});
