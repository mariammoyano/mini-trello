class statesContainer {
	constructor(){
		this.states = [];		
		this.addState = function(stateId) {
			this.states.push(stateId);
		}

		this.removeState = function(stateId) {
			let index = this.states.indexOf(stateId);
			this.states.splice(index, 1);
			return stateId;
		}

		this.updateState = function(stateId) {
			
		}
	}

}

let factory = {
	newContainer(){
		return new statesContainer();
	}
}

export default factory;