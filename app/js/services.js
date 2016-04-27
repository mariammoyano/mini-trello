/* Services */

var microTrelloAppServices = angular.module('microTrelloAppServices', []);

microTrelloAppServices.factory("LocalStorage", function($window, $rootScope) {
  return {
    setData: function(key, val) {
      $window.localStorage.setItem(key, JSON.stringify(val));
    },
    getData: function() {
    	return new customPromise(function(resolve, reject){
    		let data = JSON.parse($window.localStorage.getItem(key));
    		if(data === null || data === undefined){
    			this.reject('Could not retrieve data from localhost');
    		} else {
    			this.resolve(data);
    		}
    	});
    }
  };
});