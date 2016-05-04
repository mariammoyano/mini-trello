
function cardForm() {
    return{
    	restrict: 'AE',
    	scope: {
    		card: '='
    	},
    	templateUrl: "/app/js/Directives/card-form.html"
    }
}

export default cardForm;