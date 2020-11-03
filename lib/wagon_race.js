// TODO: write your code here

const body = document.querySelector('body');
const title = document.querySelector('h1');

const playerOneRows = document.querySelectorAll('tr#player1-race > td');
// console.log(playerOneRows);
let playerOneIndex = 0;
const playerOneRow = document.querySelector('tr#player1-race');

document.addEventListener('keyup', (event) => {
  if (event.key === 'b') {
    if (playerOneIndex === 8) {
      playerOneRows[9].classList.add("bidenWins");
      body.classList.add("blue");
      title.innerText = "Biden Wins";
      title.classList.add("white");
      window.alert("Biden Wins!");
    }
    playerOneRows[playerOneIndex].classList.add("past");
    playerOneIndex++;
    playerOneRows[playerOneIndex].classList.add("active");
  }
});

const playerTwoRows = document.querySelectorAll('tr#player2-race > td');
// console.log(playerTwoRows);
let playerTwoIndex = 0;
const playerTwoRow = document.querySelector('tr#player2-race');

document.addEventListener('keyup', (event) => {
  if (event.key === 't') {
    if (playerTwoIndex === 8) {
      playerTwoRows[9].classList.add("trumpWins");
      body.classList.add("red");
      title.innerText = "Trump Wins";
      title.classList.add("white");
      window.alert("Trump Wins!");
    }
    playerTwoRows[playerTwoIndex].classList.add("past");
    playerTwoIndex++;
    playerTwoRows[playerTwoIndex].classList.add("active");
  }
});
