import { default as userContainer} from './objectUsersContainer.js';
import { default as stateContainer} from './objectStatesContainer.js';
class Board {
	constructor(name){
		this.name = name;
		Object.assign(this, userContainer.newContainer());
		Object.assign(this, stateContainer.newContainer());
	}
}

export default Board;