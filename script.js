let player={
    name:"Rishabh",
    chips:200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
  isAlive = true;
  let firstCard = getrandomCard();
  let secondCard = getrandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function getrandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + "  ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getrandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
