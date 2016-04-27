import { default as cardContainer} from './objectCardsContainer.js';
import { default as boardContainer} from './objectBoardsContainer.js';
class User {
	constructor(id, name, lastName){
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		let aux = cardContainer.newContainer();			
		Object.assign(this, aux);
		Object.assign(this, boardContainer.newContainer());
	}
}

export default User;