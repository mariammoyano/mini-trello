var microTrelloAppFilters = angular.module('microTrelloAppFilters', [])
.filter('byId', function() {
  return function(input, idArray) {
  	// let out = [];
  	for(let id of idArray){
  		if(input.id === id){
  			return true;
  			// out.push(input);
  		}
  	}
  	return false;
    // return out;
  };
});