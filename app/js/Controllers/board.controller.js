import Board from '../classes/classBoard.js'
import Card from '../classes/classCard.js'
import State from '../classes/classState.js'
import User from '../classes/classUser.js'

class BoardController {
	constructor($scope, angFireService){
		
	  	$scope.users = angFireService.getAllUsers();
	  	$scope.states = angFireService.getAllStates();
	  	$scope.cards = angFireService.getAllCards();
	  	this.angFireService = angFireService;
	  	this.newState = new State();
	  	this.newCard = new Card();
	}

	addState(state){
		this.angFireService.addState(state);
	}

	updateState(state){
		this.angFireService.updateState(state);
	}

	removeState(state){
		this.angFireService.removeState(state);
	}

	addCard(card, parentStateId){
		// card.state = {};
		card.state[parentStateId] = true;
		this.angFireService.addCard(card, parentStateId);
	}

	updateCard(card, fireArray){
		this.angFireService.updateCard(card, fireArray);
	}

	getCardsForState(stateId){
		return this.angFireService.getCardsForState(stateId);
	}

}


BoardController.$inject = ['$scope', 'angFireService'];

export default BoardController;