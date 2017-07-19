"use strict"
function add(sum, value){
	return sum + value;
}
function selectPlayerDice(playerNumber) {
	var diceSelector;
	var playerSelected;
	var playerSelectedDice;
	playerSelectedDice = [];
	playerSelected = document.getElementById('player'+playerNumber)
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
function reportPlayerBusted(bustedPlayerNumber, bustedPlayerDiceTotal, unbustedPlayerNumber, unbustedPlayerDiceTotal){
	document.getElementById("scoreBoard").innerHTML = "Player "+bustedPlayerNumber+" total: " + bustedPlayerDiceTotal + ", PLAYER "+bustedPlayerNumber + " BUSTED " + " Player " +unbustedPlayerNumber+" total: " + unbustedPlayerDiceTotal + "  PLAYER "+unbustedPlayerNumber+" WINS";
	console.log("Player "+bustedPlayerNumber+" total: " + bustedPlayerDiceTotal + ", PLAYER"  + bustedPlayerNumber + " BUSTED");
}
function reportTie(playerOneDiceTotal,playerTwoDiceTotal){
	document.getElementById("scoreBoard").innerHTML = "Player 1 total: " + playerOneDiceTotal + ", Player 2 total: " + playerTwoDiceTotal + ", TIE";
	console.log("Player 1 total: " + playerOneDiceTotal + ", Player 2 total: " + playerTwoDiceTotal + ", TIE");
}
function reportBothPlayersBusted(playerOneDiceTotal, playerTwoDiceTotal){
	document.getElementById("scoreBoard").innerHTML = "Player 2 total: " + playerTwoDiceTotal + " PLAYER TWO BUSTED" + "  Player 1 total: " + playerOneDiceTotal + "  PLAYER ONE BUSTED";
	console.log("Player 2 total: " + playerTwoDiceTotal + " PLAYER TWO BUSTED" + "  Player 1 total: " + playerOneDiceTotal + ", PLAYER ONE BUSTED");
}
function reportBlackjack(playerNumber, playerDiceTotal){
	document.getElementById("scoreBoard").innerHTML = "Player "+playerNumber + " total: " + playerDiceTotal + " BLACKJACK";
	console.log("Player "+playerNumber+" total: " + playerDiceTotal + " BLACKJACK");
}
function tabulateScores(playerOneDiceTotal, playerTwoDiceTotal){
	var playerOnePlaceholder;
	var playerTwoPlaceholder;
	playerOnePlaceholder = "ONE";
	playerTwoPlaceholder = "TWO";
		if (playerOneDiceTotal > 21 && playerTwoDiceTotal < 21){
			reportPlayerBusted(playerOnePlaceholder, playerOneDiceTotal, playerTwoPlaceholder, playerTwoDiceTotal);
		}
		else if (playerTwoDiceTotal > 21 && playerOneDiceTotal < 21 ){
			reportPlayerBusted(playerTwoPlaceholder, playerTwoDiceTotal, playerOnePlaceholder, playerOneDiceTotal);
		}
		else if (playerOneDiceTotal === playerTwoDiceTotal){
			reportTie(playerOneDiceTotal, playerTwoDiceTotal);
		}
		else if(playerOneDiceTotal > 21 && playerTwoDiceTotal > 21){
			reportBothPlayersBusted(playerOneDiceTotal, playerTwoDiceTotal);
		}
		else if (playerOneDiceTotal == 21 ){
			reportBlackjack(playerOnePlaceholder, playerOneDiceTotal);
		}
		else if (playerTwoDiceTotal == 21 ){
			reportBlackjack(playeTwoPlaceHolder, playerTwoDiceTotal);
		}
		else if(playerOneDiceTotal < 21 && playerTwoDiceTotal < 21){
			document.getElementById("scoreBoard").innerHTML = compareScores(playerOneDiceTotal, playerTwoDiceTotal);;
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
	playerOneDiceSet = selectPlayerDice('One');
	playerOneDiceResults = collectDiceResults(playerOneDiceSet);
	playerOneDiceTotal = addDiceValues(playerOneDiceResults);
	playerTwoDiceSet = selectPlayerDice('Two');
	playerTwoDiceResults = collectDiceResults(playerTwoDiceSet);
	playerTwoDiceTotal = addDiceValues(playerTwoDiceResults);
	tabulateScores(playerOneDiceTotal, playerTwoDiceTotal);
}
