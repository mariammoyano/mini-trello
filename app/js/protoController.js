let board = new Board("testBoard");
let stateArray = [new State(1, "To Do"), new State(2, "In Progress"), new State(3, "Done"), new State(4, "Cancelled")];
let userArray = [new User(1, "Aberford", "Ambledore"), new User(2, "Barty", "Brouch"), new User(3, "Charlie", "Cheesley")];
let cardArray = [new Card(1, "card1", "this is card 1", 1, 3), new Card(1, "card2", "this is card 2", 1, 3), new Card(1, "card3", "this is card 3", 1, 3)];

for(let card of cardArray){
	assignCard(card);
}

function assignCard(card){
	let cardId = card.id;
	board.addCard(cardId);
	getById(card.state, stateArray).addCard(cardId);
	for(userId of card.users){
		let user = getById(userId, userArray);
		user.addCard(cardId);
	}
	cardArray.push(card);
}

function lastId(array){
	return array[array.length - 1].id;
}

function getById(id, array){
	for(let element of array){
		if(element.id === id){
			return element;
		}
	}
	return null;
}

function addState(board, state){
	let stateId = lastId(stateArray) + 1;
	state.id = stateId;
	board.addState(stateId);
	stateArray.push(state);
}

function removeState(state){
	for(let cardId of state.cards){
		let card = getById(cardId, cardArray);
		card.state = "none";
	}
	stateArray.splice(stateArray.indexOf(state), 1);
}

function addCard(state, card){
	let cardId = lastId(cardArray) + 1;
	card.id = cardId;
	board.addCard(cardId);
	state.addCard(cardId);
	card.state = state.id;
	for(userId of card.users){
		let user = getById(userId, userArray);
		user.addCard(cardId);
	}
	cardArray.push(card);
}

function removeCard(card){
	for(userId of card.users){
		let user = getById(userId, userArray);
		user.removeCard(card.id);
	}
	let state = getById(card.state, stateArray);
	state.removeCard(card.id);
	board.removeCard(card.id);
	cardArray.splice(cardArray.indexOf(card), 1);
}

function addUser(user){
	let userId = lastId(userArray) + 1;
	user.id = userId;
	board.addUser(userId);
	for(cardId of user.cards){
		let card = getById(cardId, cardArray);
		card.addUser(userId);
	}
}

function removeUser(user){
	board.removeUser(user.id);
	for(cardId of user.cards){
		let card = getById(cardId, cardArray);
		card.removeUser(user.id);
	}
	userArray.splice(userArray.indexOf(user), 1);
}