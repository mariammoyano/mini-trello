
function stateEdit() {
    return{
    	restrict: 'AE',
    	scope: {
    		form: '=',
    		state: '=',
    		action: '&'
    	},
    	//TODO: move link function
    	link: function(scope, elem, attrs){
    		scope.editState = angular.copy(scope.state);
    		scope.toggleEdit = function(){
    			scope.editing = !scope.editing;
    		};
    		scope.saveState = function(){
    			angular.copy(scope.editState, scope.state);
    			scope.action();
    			this.toggleEdit();
    		};
    		scope.reset = function(){
    			angular.copy(scope.state, scope.editState);
    		}
    		scope.cancelEdit = function(){
    			scope.reset();
    			scope.editing = false;
    		}
    	},
    	templateUrl: "/app/js/Directives/state-edit.html"
    }

}

export default stateEdit;