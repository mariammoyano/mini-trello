
function editableContent() {
    return{
    	restrict: 'AE',
    	// transclude:true,
        transclude: {
            'view': '?contentView',
            'edit': '?contentEdit'
        },
    	scope: {
    		form: '=',
    		model: '=',
    		action: '&',
    		actionType: '@',
    		value: '@'
    	},
	    link: function($scope) {
	    	switch($scope.actionType) {
			    case 'edit':
			        $scope.okValue = 'Save';
                    break;
                case 'add':
                    $scope.okValue = 'Add';
                    break;
                default:
                    $scope.okValue = 'Ok';
            }
            $scope.init = function(){
                $scope.masterModel = angular.copy($scope.model)
                $scope.editModel = angular.copy($scope.model);               
            };
            $scope.init();

            $scope.toggleEdit = function(){
                $scope.editing = !$scope.editing;
            };
            $scope.saveChanges = function(){
                angular.copy($scope.editModel, $scope.model);
                if($scope.actionType !== 'add'){
                    $scope.masterModel = angular.copy($scope.model);
                }
                $scope.action();
                this.cancel();
            };
            $scope.reset = function(){
				angular.copy($scope.masterModel, $scope.editModel);
			}
			$scope.cancel = function(){
				$scope.reset();
				this.toggleEdit();
			}
	      
	    },
    	//TODO: move link function
    	// link: function(scope, elem, attrs){
    	// 	// scope.model = {}
    	// 	scope.editState = angular.copy(scope.state);
    	// 	scope.toggleEdit = function(){
    	// 		scope.editing = !scope.editing;
    	// 	};
    	// 	scope.saveState = function(){
    	// 		angular.copy(scope.editState, scope.state);
    	// 		scope.action();
    	// 		// this.toggleEdit();
    	// 	};
    	// 	scope.reset = function(){
    	// 		angular.copy(scope.state, scope.editState);
    	// 	}
    	// 	scope.cancelEdit = function(){
    	// 		scope.reset();
    	// 		// scope.editing = false;
    	// 	}
    	// },
    	templateUrl: "/app/js/Directives/editable-content.html"
    }

}

export default editableContent;