class usersContainer {
	constructor(){
		this.users = [];		
		this.addUser = function(userId) {
			this.users.push(userId);
		}

		this.removeUser = function(userId) {
			let index = this.users.indexOf(userId);
			this.users.splice(index, 1);
			return userId;
		}

		this.updateUser = function(userId) {
			
		}
	}

}

let factory = {
	newContainer(){
		return new usersContainer();
	}
}

export default factory;