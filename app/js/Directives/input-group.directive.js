
function inputGroup() {
    return{
    	restrict: 'AE',
        require: '^^editableContent',
    	scope: {
    		elementType: '@',
            states: '='
    	},
    	link: function(scope, element, attrs, parentCtrl){
            scope.editable = parentCtrl.editable;
    		scope.getTemplate = function(){
    			switch(scope.elementType){
    				case "card":
    					return "/app/partials/card-form.html";
    				case "state":
    					return "/app/partials/state-form.html";
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