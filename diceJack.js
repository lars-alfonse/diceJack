"use strict"
function add(sum, value){
	return sum + value;
}
function selectPlayerOneDice() {
	var diceSelector;
	var playerSelected;
	var playerSelectedDice;
	playerSelectedDice = [];
	playerSelected = document.getElementById('playerOne')
	diceSelector = [];
	diceSelector = playerSelected.getElementsByTagName('input');
	for (var i = 0; i < diceSelector.length; i++) {
		if(diceSelector[i].checked){
			var selectedDie;
			selectedDie = diceSelector[i].value;
			playerSelectedDice.push(selectedDie)
		}
	}
	return playerSelectedDice	
}
function selectPlayerTwoDice() {
	var diceSelector;
	var playerSelected;
	var playerSelectedDice;
	playerSelectedDice = [];
	playerSelected = document.getElementById('playerTwo')
	diceSelector = [];
	diceSelector = playerSelected.getElementsByTagName('input');
	for (var i = 0; i < diceSelector.length; i++) {
		if(diceSelector[i].checked){
			var selectedDie;
			selectedDie = diceSelector[i].value;
			playerSelectedDice.push(selectedDie)
		}
	}
	return playerSelectedDice	
}
function diceRoll(dieValue){
	var dieResult;
	dieResult = Math.floor(Math.random()*dieValue + 1);
	return dieResult;
}
function addDiceValues(diceResults){
	var diceTotal;
	diceTotal = diceResults.reduce(add);
	return diceTotal;
}
function collectDiceResults(diceSet){
		var diceResults;
		var dieResult;
		diceResults = [];
		for (var i = 0; i < diceSet.length; i++) {
			dieResult = diceRoll(diceSet[i]);
			console.log(dieResult);
			diceResults.push(dieResult);
		}
	return diceResults
}
function tabulateScores(playerOneDiceTotal, playerTwoDiceTotal){
		if (playerOneDiceTotal > 21 && playerTwoDiceTotal < 21){
			document.getElementById("scoreBoard").innerHTML = "Player 1 total: " + playerOneDiceTotal + ", PLAYER ONE BUSTED" + " Player 2 total: " + playerTwoDiceTotal + "  PLAYER TWO WINS";
			console.log("Player 1 total: " + playerOneDiceTotal + ", PLAYER ONE BUSTED");
		}
		else if (playerTwoDiceTotal > 21 && playerOneDiceTotal < 21 ){
			document.getElementById("scoreBoard").innerHTML = "Player 2 total: " + playerTwoDiceTotal + " PLAYER TWO BUSTED" + "  Player 1 total: " + playerOneDiceTotal + "  PLAYER ONE WINS";
			console.log("Player 2 total: " + playerTwoDiceTotal + " PLAYER TWO BUSTED");
		}
		else if (playerOneDiceTotal === playerTwoDiceTotal){
			document.getElementById("scoreBoard").innerHTML = "Player 1 total: " + playerOneDiceTotal + ", Player 2 total: " + playerTwoDiceTotal + ", TIE";
			console.log("Player 1 total: " + playerOneDiceTotal + ", Player 2 total: " + playerTwoDiceTotal + ", TIE");
		}
		else if(playerOneDiceTotal > 21 && playerTwoDiceTotal > 21){
			document.getElementById("scoreBoard").innerHTML = "Player 2 total: " + playerTwoDiceTotal + " PLAYER TWO BUSTED" + "  Player 1 total: " + playerOneDiceTotal + "  PLAYER ONE BUSTED";
			console.log("Player 2 total: " + playerTwoDiceTotal + " PLAYER TWO BUSTED" + "  Player 1 total: " + playerOneDiceTotal + ", PLAYER ONE BUSTED");
		}
		else if (playerOneDiceTotal == 21 ){
			document.getElementById("scoreBoard").innerHTML = "Player 1 total: " + playerOneDiceTotal + " BLACKJACK";
			console.log("Player 1 total: " + playerOneDiceTotal + " BLACKJACK");
		}
		else if (playerTwoDiceTotal == 21 ){
			document.getElementById("scoreBoard").innerHTML = "Player 2 total: " + playerTwoDiceTotal + " BLACKJACK";
			console.log("Player 2 total: " + playerTwoDiceTotal + " BLACKJACK");
		}
		else if(playerOneDiceTotal < 21 && playerTwoDiceTotal < 21){
			document.getElementById("scoreBoard").innerHTML = compareScores(playerOneDiceTotal, playerTwoDiceTotal);
			console.log(compareScores(playerOneDiceTotal, playerTwoDiceTotal));
		}
}
function compareScores(playerOneDiceTotal, playerTwoDiceTotal){
	if (playerOneDiceTotal > playerTwoDiceTotal) {
		return "Player 1 total: " + playerOneDiceTotal + ", Player 2 total: " + playerTwoDiceTotal + ", PLAYER ONE WINS"
	}
	else {
		return "Player 1 total: " + playerOneDiceTotal + ", Player 2 total: " + playerTwoDiceTotal + ", PLAYER TWO WINS"
	}
}
function startGame(){
	var playerOneDiceSet;
	var playerTwoDiceSet
	var playerOneDiceResults;
	var playerOneDiceTotal;
	var playerTwoDiceTotal;
	var playerTwoDiceResults;
	playerOneDiceSet = selectPlayerOneDice();
	playerOneDiceResults = collectDiceResults(playerOneDiceSet);
	playerOneDiceTotal = addDiceValues(playerOneDiceResults);
	playerTwoDiceSet = selectPlayerTwoDice();
	playerTwoDiceResults = collectDiceResults(playerTwoDiceSet);
	playerTwoDiceTotal = addDiceValues(playerTwoDiceResults);
	tabulateScores(playerOneDiceTotal, playerTwoDiceTotal);
}
