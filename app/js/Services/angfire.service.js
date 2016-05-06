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
		this.users.$save(user).then(function(ref) {
			console.log(`User "${ref.key()}" modified`);
		});
	}

	removeUser(user){
		this.users.$remove(user).then(function(ref) {
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
		query.on("child_added",function(snapshot){
			console.log(snapshot.key());
		});
		query.on("child_changed", function(snapshot){
			console.log("thing changed");
			var name = Object.getOwnPropertyNames(snapshot.val().state)[0];
			console.log(`${snapshot.key()}: ${snapshot.val().state}`);
			var state = self.refState.child(name);
			state.cards[snapshot.key()] = true;
		});
		var list = this.$firebaseArray(query);
		return list;
	}

	updateCard(card, fireArray){
		fireArray.$save(card).then(function(ref) {
			console.log(`Card "${ref.key()}" modified`);
			//TODO update state referencing card
		},
		function(err){
			console.log(err);
		});		
	}

	removeCard(card){
		this.cards.$remove(card).then(function(ref) {
			console.log(`Card "${ref.key()}" removed`);
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

	static factory($firebaseArray){
		return new AngFireService($firebaseArray);
	}
}

AngFireService.factory.$inject = ['$firebaseArray'];

export default AngFireService;