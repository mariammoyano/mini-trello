class AngFireService {
	constructor($firebaseArray){
		this.baseUrl = "https://microtrello.firebaseio.com/"
		this.refUsr = new Firebase(`${this.baseUrl}users`);
		this.refState = new Firebase(`${this.baseUrl}states`);
		this.refCard = new Firebase(`${this.baseUrl}cards`);
		
	  	this.users = $firebaseArray(this.refUsr);
	  	this.states = $firebaseArray(this.refState);
	  	this.cards = $firebaseArray(this.refCard);
	  	this.$firebaseArray = $firebaseArray;

	  	this.refCard.on("child_changed", function(snapshot) {
		  var changedCard = snapshot.val();
		  console.log(`Card ${changedCard.name} changed`);
		});

	  	this.refCard.on("child_removed", function(snapshot) {
		  var changedCard = snapshot.val();
		  console.log(`Card ${changedCard.name} removed`);		  
		});

	 //  	this.refState.on("child_removed", function(snapshot) {
		//   var deletedState = snapshot.val();
		//   console.log(`The state named ${deletedState.name} has been deleted`);
		// });
	}

	addState(state){
		this.states.$add(state).then(function(ref) {
		  var id = ref.key();
		  state.id = id;
		  console.log(`State "${ref.key()}"(${state.name}) added`);
		});
	}

	updateState(state){
		this.states.$save(state).then(function(ref) {
			console.log(`State "${ref.key()}" modified`);
		});
	}

	removeState(state){
		this.states.$remove(state).then(function(ref) {
			//Use ref to retrieve name??
			console.log(`State "${ref.key()}"(${state.name}) removed`);
		});
	}

	addUser(user){
		this.users.$add(user).then(function(ref) {
		  var id = ref.key();
		  user.id = id;
		});
	}

	updateUser(user){
		let index = this.users.$indexFor(user.$id); 
		this.users[index] = user;

		this.users.$save(index).then(function(ref){
			console.log(`User "${ref.key()}" modified`);
		},
		function(err){
			console.log(err);
		});	
	}

	removeUser(user){
		let index = this.users.$indexFor(user.$id);
		this.users.$remove(index).then(function(ref) {
			console.log(`User "${ref.key()}" removed`);
		});
	}

	addCard(card, parentState){
		let self = this;
		this.cards.$add(card).then(function(ref) {
			var id = ref.key();
			card.id = id;
			self.refState.child(`${parentState}/cards/${id}`).set(true);
		})
	}

	getCardsForState(stateId){
		//Use this or filters or ng-show???
		var self = this;
		var query = this.refCard.orderByChild(`state/${stateId}`).equalTo(true);
		// query.on("child_added",function(snapshot){
		// 	console.log(`Card ${snapshot.key()} added`);
		// });
		// query.on("child_changed", function(snapshot){
		// 	console.log("card changed");
		// 	var name = Object.getOwnPropertyNames(snapshot.val().state)[0];
		// 	// console.log(`${snapshot.key()}: ${snapshot.val().state}`);
		// 	var state = self.refState.child(name);
		// 	if(!state.cards){ state.cards = {}; }
		// 	state.cards[snapshot.key()] = true;
		// });
		// query.on("child_removed", function(snapshot){
		// 	console.log("card removed");
		// });
		var list = this.$firebaseArray(query);
		return list;
	}

	updateCard(card){
		let self = this;
		let index = self.cards.$indexFor(card.$id); 
		let oldState = self.getCardStateId(self.cards[index]);
		let newState = self.getCardStateId(card);
		self.cards[index] = card;
		self.cards.$save(index).then(function(ref){
			console.log(`Card "${ref.key()}" modified`);
			if(oldState !== newState){
				self.refState.child(`${oldState}/cards/${card.$id}`).remove();
				self.refState.child(`${newState}/cards/${card.$id}`).set(true);
			}
		},
		function(err){
			console.log(err);
		});		
	}

	removeCard(card){
		let self = this;
		this.cards.$remove(this.cards.$indexFor(card.$id)).then(function(ref) {
			console.log(`Card "${ref.key()}" removed`);
			let stateId = self.getCardStateId(card);//use child??
			self.getState(`${stateId}`).child(`cards/${card.$id}`).remove();
			console.log(`Card "${ref.key()}" reference removed from state`);
		});
	}

	getAllStates(){
		return this.states;
	}

	getAllUsers(){
		return this.users;
	}

	getAllCards(){
		return this.cards;
	}

	getCardStateId(card){
		return Object.getOwnPropertyNames(card.state)[0];
	}

	getState(id){
		return this.refState.child(id);
	}

	static factory($firebaseArray){
		return new AngFireService($firebaseArray);
	}
}

AngFireService.factory.$inject = ['$firebaseArray'];

export default AngFireService;