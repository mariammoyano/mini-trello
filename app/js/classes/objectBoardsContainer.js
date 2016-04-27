class boardsContainer {
	constructor(){
		this.boards = [];		
		this.addBoard = function(boardId) {
			this.boards.push(boardId);
		}

		this.removeBoard = function(boardId) {
			let index = this.boards.indexOf(boardId);
			this.boards.splice(index, 1);
			return boardId;
		}

		this.updateBoard = function(boardId) {
			
		}
	}

}

let factory = {
	newContainer(){
		return new boardsContainer();
	}
}

export default factory;