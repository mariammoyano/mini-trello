class AngFireService {
	constructor($firebaseArray){
		this.baseUrl = "https://microtrello.firebaseio.com/"
		this.refUsr = new Firebase(`${this.baseUrl}users`);
		this.refState = new Firebase(`${this.baseUrl}states`);
		this.refCard = new Firebase(`${this.baseUrl}cards`);
		
	  	this.users = $firebaseArray(this.refUsr);
	  	this.states = $firebaseArray(this.refState);
	  	this.cards = $firebaseArray(this.refCard);
	}

	addState(state){
		this.states.$add(state).then(function(ref) {
		  var id = ref.key();
		  state.id = id;
		});
	}

	updateState(state){
		this.states.$save(state).then(function(ref) {
			console.log(`State "${ref.key()}" modified`);
		});
	}

	removeState(state){
		this.states.$remove(state).then(function(ref) {
			console.log(`State "${ref.key()}" removed`);
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