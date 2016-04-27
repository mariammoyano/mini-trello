import { default as userContainer} from './objectUsersContainer.js';
import { default as stateContainer} from './objectStatesContainer.js';

class Card {
	constructor(id = -1, name = "", description = "", state = false, user = false) {
		this.id = id;
		this.name = name;
		this.description = "";
		Object.assign(this, stateContainer.newContainer());		
		Object.assign(this, userContainer.newContainer());		
		if(state){
			this.addState(state);			
		}
		if(user){
			this.addUser(user);			
		}
	}

	get state () { return this.states[0] };

	set state(newState) { this.states[0] = newState; };
}

export default Card;