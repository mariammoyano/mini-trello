
class Card {
	constructor(name = "", description = "", state = false, user = false) {
		this.name = name;
		this.description = description;
		this.users = {};
		this.state = {};
		// if(state){
		// 	this.state[state] = true;
		// }
		// if(user){
		// 	this.users[user] = true;			
		// }
	}
}

export default Card;