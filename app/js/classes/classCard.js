
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

export default Card;