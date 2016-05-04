
function customEdit() {
    return{
    	restrict: 'AE',
    	transclude:true,
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

	        $scope.masterModel = angular.copy($scope.model)
			$scope.editModel = angular.copy($scope.model);
			$scope.toggleEdit = function(){
				$scope.editing = !$scope.editing;
			};
			$scope.saveChanges = function(){
				angular.copy($scope.editModel, $scope.model);
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
    	templateUrl: "/app/js/Directives/custom-edit.html"
    }

}

export default customEdit;