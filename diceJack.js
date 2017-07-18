"use strict"
function selectPlayerOneDice() {
	var diceSelector;
	var playerSelected;
	playerSelected = document.getElementById('playerOne')
	diceSelector = [];
	diceSelector = playerSelected.getElementsByTagName('input');
	for (var i = 0; i < diceSelector.length; i++) {
		if(diceSelector[i].checked){
			var selectedDie;
			selectedDie = diceSelector[i].value;
			console.log(selectedDie);
		}
	}	
}