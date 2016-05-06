
function inputGroup() {
    return{
    	restrict: 'AE',
    	scope: {
    		editable: '=',
    		elementType: '@'
    	},
    	link: function(scope){
    		scope.getTemplate = function(){
    			switch(scope.elementType){
    				case "card":
    					return "/app/js/Directives/card-form.html";
    				case "state":
    					return "/app/js/Directives/state-form.html";
    			}
    		}
    	},
    	// templateUrl: function(elem,attrs) {
     //       return attrs.templateUrl;
     //   }
     	// templateUrl: getTemplate()
     template: '<div ng-include = "getTemplate()"></div>'
    }
}

export default inputGroup;