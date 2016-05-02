
function stateEdit() {
    return{
    	restrict: 'AE',
    	scope: {
    		form: '=',
    		state: '='
    	},
    	templateUrl: "/app/js/Directives/state-edit.html"
    }
}

export default stateEdit;