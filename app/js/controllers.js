// 'use strict';
import servicesModuleName from './services';
import BoardCtrl from './Controllers/board.controller';
import stateForm from './Directives/state-form.directive';
import cardForm from './Directives/card-form.directive';
import customEdit from './Directives/custom-edit.directive';

/* Controllers */

var moduleName = 'microTrelloAppControllers';

var microTrelloAppControllers = angular.module(moduleName, ['microTrelloAppServices']);

microTrelloAppControllers.controller('BoardCtrl', BoardCtrl);

microTrelloAppControllers.directive('stateForm', stateForm);

microTrelloAppControllers.directive('cardForm', cardForm);

microTrelloAppControllers.directive('customEdit', customEdit);

export default moduleName;