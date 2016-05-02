
function stateForm() {
    return{
    	restrict: 'AE',
    	scope: {
    		form: '=',
    		state: '='
    	},
    	templateUrl: "/app/js/Directives/state-form.html"
    }
}

export default stateForm;