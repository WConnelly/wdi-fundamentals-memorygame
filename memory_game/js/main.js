var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var flippedCards = document.getElementsByClassName("flipped");
var score = 0;

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score += 1;
		document.getElementById("score").textContent = score;
	}
	else {
		alert("Sorry, try again");
	}
};

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	this.setAttribute("class", "flipped");
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

var unFlipCard = function () {
	for (i = 0; i < flippedCards.length; i++) {
		flippedCards[i].setAttribute("src", "images/back.png");
		cardsInPlay = [];
	}
};

var newGame = function () {
	score = 0
	unFlipCard();
	document.getElementById("score").textContent = score;
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		var gameBoard = document.getElementById("game-board");
		gameBoard.appendChild(cardElement);
	}
};

document.querySelector("#playAgain").addEventListener("click", unFlipCard);
document.querySelector("#resetGame").addEventListener("click", newGame);

createBoard();