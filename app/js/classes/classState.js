import { default as cardContainer} from './objectCardsContainer.js';
class State {
	constructor(id, name){
		this.id = id;
		this.name = name;
		Object.assign(this, cardContainer.newContainer());
	}
}

export default State;