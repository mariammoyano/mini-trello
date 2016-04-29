import Board from './classes/classBoard.js'
import Card from './classes/classCard.js'
import State from './classes/classState.js'
import User from './classes/classUser.js'

class BoardController {
	constructor($scope, angFireService){
		
	  	$scope.users = angFireService.getAllUsers();
	  	$scope.states = angFireService.getAllStates();
	  	$scope.cards = angFireService.getAllCards();

	}

	addState(state){
		angFireService.addState(state);
	}

	updateState(state){
		angFireService.updateState(state);
	}

	removeState(state){
		angFireService.removeState(state);
	}

	addState(){
        if(this.addStateForm.$valid && this.newState !== {}){
        	addState(this.newState);
        }
    }

    resetFormState(){
    	this.addStateForm.$setPristine();
        this.addStateForm.$setUntouched();
        this.newState = new State();
    }

    toggleForm(){
    	this.showForm = !this.showForm;
    	this.resetFormState();
    }
}


BoardController.$inject = ['$scope', 'angFireService'];

export default BoardController;