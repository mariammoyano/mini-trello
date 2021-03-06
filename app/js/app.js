import controllersModuleName from './controllers';
import servicesModuleName from './services';

var moduleName = 'microTrelloApp';

var microTrelloApp = angular.module(moduleName, ['firebase','ngRoute',controllersModuleName,servicesModuleName]);
// var microTrelloApp = angular.module(moduleName, ['firebase','ngRoute','microTrelloAppControllers','microTrelloAppFilters']);

microTrelloApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/board.html',
        controller: 'BoardCtrl as bc'
      }).
      when('/users', {
        templateUrl: 'partials/users.html',
        controller: 'BoardCtrl as uc'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

export default moduleName;