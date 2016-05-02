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

	addNewState(){
        if(this.stateForm.$valid && this.newState !== {}){
        	this.addState(this.newState);
        }
    }

    resetFormState(){
    	this.stateForm.$setPristine();
        this.stateForm.$setUntouched();
        this.newState = new State();
    }

    toggleForm(){
    	this.showForm = !this.showForm;
    	this.resetFormState();
    }
}


BoardController.$inject = ['$scope', 'angFireService'];

export default BoardController;