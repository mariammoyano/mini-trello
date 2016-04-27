'use strict'

var microTrelloApp = angular.module('microTrelloApp', ['firebase','ngRoute','microTrelloAppControllers','microTrelloAppFilters']);

microTrelloApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl as bc'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);