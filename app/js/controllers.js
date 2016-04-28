// 'use strict';
import { default as servicesModuleName } from './services';

import { default as Board } from './classes/classBoard.js'
import { default as Card } from './classes/classCard.js'
import { default as State } from './classes/classState.js'
import { default as User } from './classes/classUser.js'

/* Controllers */

var moduleName = 'microTrelloAppControllers';

var microTrelloAppControllers = angular.module(moduleName, ['microTrelloAppServices','firebase']);

microTrelloAppControllers.controller('BoardCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

	var refUsr = new Firebase("https://microtrello.firebaseio.com/users");
	var refState = new Firebase("https://microtrello.firebaseio.com/states");
	var refCard = new Firebase("https://microtrello.firebaseio.com/cards");
  	$scope.users = $firebaseArray(refUsr);
  	$scope.states = $firebaseArray(refState);
  	$scope.cards = $firebaseArray(refCard);

	function addState(state){
		$scope.states.$add(state).then(function(ref) {
		  var id = ref.key();
		  state.id = id;
		});
	}

	function updateState(state){
		$scope.states.$save(state).then(function(ref) {
			console.log(`State "${ref.key()}" modified`);
		});
	}

	this.removeState = function(state){
		$scope.states.$remove(state).then(function(ref) {
			console.log(`State "${ref.key()}" removed`);
		});
	}

	this.addState = function(){
        if(this.addStateForm.$valid && this.newState !== {}){
        	addState(this.newState);
        }
    }

    this.resetFormState = function(){
    	this.addStateForm.$setPristine();
        this.addStateForm.$setUntouched();
        this.newState = new State();
    }

    this.toggleForm = function(){
    	this.showForm = !this.showForm;
    	this.resetFormState();
    }

	
}]);

export default moduleName;