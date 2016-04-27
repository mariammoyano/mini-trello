'use strict';

class Board {
	constructor(name){
		this.name = name;
		this.users = [];
		this.states = [];
	}
}

class Card {
	constructor(name = "", description = "", state = false, user = false) {
		this.name = name;
		this.description = description;
		this.users = [];
		if(state){
			this.state = state;
		}
		if(user){
			this.users.push(user);			
		}
	}
}

class State {
	constructor(name, id = -1){
		this.name = name;
		this.cards = [];
	}
}

class User {
	constructor(name, lastName){
		this.name = name;
		this.lastName = lastName;
		this.cards = [];			
		this.boards = [];			
	}
}

// import { default as Board } from './js/classes/classBoard.js'
// import { default as Card } from './js/classes/classCard.js'
// import { default as State } from './js/classes/classState.js'
// import { default as User } from './js/classes/classUser.js'

/* Controllers */

var microTrelloAppControllers = angular.module('microTrelloAppControllers', ['microTrelloAppServices','firebase']);

microTrelloAppControllers.controller('BoardCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

	var refUsr = new Firebase("https://microtrello.firebaseio.com/users");
	var refState = new Firebase("https://microtrello.firebaseio.com/states");
	var refCard = new Firebase("https://microtrello.firebaseio.com/cards");
  	$scope.users = $firebaseArray(refUsr);
  	$scope.states = $firebaseArray(refState);
  	$scope.cards = $firebaseArray(refCard);



	// $scope.board = new Board("testBoard");
	// $scope.stateArray = [new State("To Do"), new State("In Progress"), new State("Done"), new State("Cancelled")];
	// $scope.userArray = [new User("Aberford", "Ambledore"), new User("Barty", "Brouch"), new User("Charlie", "Cheesley")];
	// $scope.cardArray = [new Card("card1", "this is card 1", 1, 1), new Card("card2", "this is card 2", 1, 2), new Card("card3", "this is card 3", 1, 3)];

	function getById(id, array){
		for(let element of array){
			if(element.id === id){
				return element;
			}
		}
		return null;
	}

	function addState(state){
		$scope.states.$add(state).then(function(ref) {
		  var id = ref.key();
		  state.id = id;
		});
	}

	function removeState(state){
		$scope.states.$remove(state).then(function(ref) {
			console.log(`State "${ref.key()}" removed`);
		}
		
	}

	
}]);