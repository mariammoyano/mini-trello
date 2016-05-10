
function inputGroup() {
    return{
    	restrict: 'AE',
        require: '^^editableContent',
    	scope: {
    		elementType: '@',
            states: '='
    	},
    	link: function(scope, element, attrs, parentCtrl){
            init: init;
            init();
            
    		scope.getTemplate = function(){
    			switch(scope.elementType){
    				case "card":
    					return "/app/partials/card-form.html";
    				case "state":
                        return "/app/partials/state-form.html";
                    case "user":
    					return "/app/partials/user-form.html";
    			}
    		}
            scope.changeState = function(){
                if(scope.elementType === "card"){
                    let oldState = Object.getOwnPropertyNames(scope.editable.state)[0];
                    if(oldState !== scope.selects.selectedState){
                        delete scope.editable.state[oldState];
                        scope.editable.state[scope.selects.selectedState] = true;
                    }
                }
            }
            function init(){
                scope.selects = {};
                scope.editable = parentCtrl.editable;
                if(scope.elementType === "card"){
                    scope.selects.selectedState = Object.getOwnPropertyNames(scope.editable.state)[0];
                    parentCtrl.onReset(resetState);
                }
            }
            function resetState(){
                scope.selects.selectedState = Object.getOwnPropertyNames(scope.editable.state)[0];
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