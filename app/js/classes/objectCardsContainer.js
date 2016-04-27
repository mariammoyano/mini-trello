class cardsContainer {
	constructor(){
		this.cards = [];		
		this.addCard = function(cardId) {
			this.cards.push(cardId);
		}

		this.removeCard = function(cardId) {
			let index = this.cards.indexOf(cardId);
			this.cards.splice(index, 1);
			return cardId;
		}

		this.updateCard = function(cardId) {
			
		}
	}

}

let factory = {
	newContainer(){
		return new cardsContainer();
	}
}

export default factory;